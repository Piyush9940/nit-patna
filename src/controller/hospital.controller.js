import axios from 'axios';
import hospitalModel from '../models/hospital.model.js';

const apiKey = process.env.GOOGLE_API_KEY;

// Get nearby hospitals using Google Places API and store in MongoDB
export const getNearbyHospitals = async (req, res) => {
  const { lat, lng } = req.body;

  if (!lat || !lng) {
    return res.status(400).json({ error: "Latitude and longitude are required" });
  }

  try {
    const nearbyUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=3000&type=hospital&key=${apiKey}`;
    const response = await axios.get(nearbyUrl);
    const hospitals = response.data.results.slice(0, 5);

    const savedHospitals = [];

    for (const h of hospitals) {
      const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${h.place_id}&fields=name,formatted_address,formatted_phone_number,rating,geometry&key=${apiKey}`;
      const detail = await axios.get(detailsUrl);
      const d = detail.data.result;

      const exists = await hospitalModel.findOne({ place_id: h.place_id });
      if (!exists) {
        const newHospital = new hospitalModel({
          name: d.name,
          address: d.formatted_address,
          phone: d.formatted_phone_number || "N/A",
          place_id: h.place_id,
          rating: d.rating || null,
          location: {
            lat: d.geometry.location.lat,
            lng: d.geometry.location.lng
          }
        });

        await newHospital.save();
        savedHospitals.push(newHospital);
      }
    }

    res.status(200).json({ message: "Hospitals saved", data: savedHospitals });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch hospitals" });
  }
};

// Get hospitals from DB (limit 10)
export const getHospitalsFromDB = async (req, res) => {
  try {
    const hospitals = await hospitalModel.find().limit(10);
    res.status(200).json(hospitals);
  } catch (err) {
    res.status(500).json({ error: "Error retrieving hospitals" });
  }
};

// Get hospital by ID
export const getHospitalById = async (req, res) => {
  try {
    const { id } = req.params;
    const hospital = await hospitalModel.findById(id);
    if (!hospital) {
      return res.status(404).json({ message: "Hospital not found" });
    }
    res.status(200).json(hospital);
  } catch (error) {
    console.error("Error fetching hospital by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get hospital by name
export const getHospitalByName = async (req, res) => {
  try {
    const { name } = req.params;
    const hospitals = await hospitalModel.find({ name: { $regex: name, $options: "i" } });
    if (!hospitals.length) {
      return res.status(404).json({ message: "No hospitals found" });
    }
    res.status(200).json(hospitals);
  } catch (error) {
    console.error("Error fetching hospital by name:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get hospital by QR code
export const getHospitalByQrCode = async (req, res) => {
  try {
    const { qrCode } = req.params;
    const hospitals = await hospitalModel.find({ qrCode: { $regex: qrCode, $options: "i" } });
    if (!hospitals.length) {
      return res.status(404).json({ message: "No hospitals found" });
    }
    res.status(200).json(hospitals);
  } catch (error) {
    console.error("Error fetching hospital by QR code:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get hospitals by geolocation (within 5 miles)
export const getHospitalByLocation = async (req, res) => {
  try {
    const { lat, lng } = req.params;
    const hospitals = await hospitalModel.find({
      location: {
        $geoWithin: {
          $centerSphere: [[parseFloat(lng), parseFloat(lat)], 5 / 3963.2] // Earth radius in miles
        }
      }
    });
    if (!hospitals.length) {
      return res.status(404).json({ message: "No hospitals found" });
    }
    res.status(200).json(hospitals);
  } catch (error) {
    console.error("Error fetching hospitals by location:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update hospital
export const updateHospital = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, address, phone, rating } = req.body;
    const updatedHospital = await hospitalModel.findByIdAndUpdate(
      id,
      { name, address, phone, rating },
      { new: true }
    );
    res.status(200).json(updatedHospital);
  } catch (error) {
    console.error("Error updating hospital:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
