import adminModel from "../models/admin.model.js";

// === Permission ===
export const givepermission = async (req, res) => {
  try {
    const { driverLicenseNumber, permission } = req.body;
    const updated = await adminModel.findOneAndUpdate(
      { driverLicenseNumber },
      { permission },
      { new: true }
    );
    res.status(200).json({ success: true, message: "Permission updated", data: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// === Messaging ===
export const getmessage = async (req, res) => {
  try {
    const messages = await adminModel.find({}, "driverMessage adminMessage");
    res.status(200).json({ success: true, messages });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const sendmessage = async (req, res) => {
  try {
    const { driverLicenseNumber, adminMessage } = req.body;
    const updated = await adminModel.findOneAndUpdate(
      { driverLicenseNumber },
      { adminMessage },
      { new: true }
    );
    res.status(200).json({ success: true, message: "Message sent", data: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// === Fine Handling ===
export const fineReport = async (req, res) => {
  try {
    const { driverLicenseNumber, speedFine } = req.body;
    const updated = await adminModel.findOneAndUpdate(
      { driverLicenseNumber },
      { speedFine },
      { new: true }
    );
    res.status(200).json({ success: true, message: "Fine updated", data: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const addFineReport = async (req, res) => {
  try {
    const { driverLicenseNumber, fineHistory } = req.body;
    const updated = await adminModel.findOneAndUpdate(
      { driverLicenseNumber },
      { fineHistory },
      { new: true }
    );
    res.status(200).json({ success: true, message: "Fine report added", data: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const fineHistory = async (req, res) => {
  try {
    const history = await adminModel.find({}, "driverLicenseNumber fineHistory");
    res.status(200).json({ success: true, history });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const fileFine = async (req, res) => {
  try {
    const { driverLicenseNumber, finePayment } = req.body;
    const updated = await adminModel.findOneAndUpdate(
      { driverLicenseNumber },
      { finePayment },
      { new: true }
    );
    res.status(200).json({ success: true, message: "Fine filed", data: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// === Monitoring ===
export const liveMonitoring = async (req, res) => {
  try {
    const live = await adminModel.find({});
    res.status(200).json({ success: true, data: live });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const speedMonitoring = async (req, res) => {
  try {
    const speedData = await adminModel.find({}, "driverName currentSpeed speedLimit speedStatus");
    res.status(200).json({ success: true, data: speedData });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const sleepMonitoring = async (req, res) => {
  try {
    const sleepData = await adminModel.find({}, "driverCamStatus driverCam");
    res.status(200).json({ success: true, data: sleepData });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// === Reports ===
export const accidentReport = async (req, res) => {
  try {
    const { driverLicenseNumber, accidentType, accidentDescription, accidentLocation } = req.body;
    const updated = await adminModel.findOneAndUpdate(
      { driverLicenseNumber },
      { accidentType, accidentDescription, accidentLocation },
      { new: true }
    );
    res.status(200).json({ success: true, message: "Accident reported", data: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const potholeReport = async (req, res) => {
  try {
    const { driverLicenseNumber, potHoleLocation, potHoleDescription } = req.body;
    const updated = await adminModel.findOneAndUpdate(
      { driverLicenseNumber },
      { potHoleLocation, potHoleDescription },
      { new: true }
    );
    res.status(200).json({ success: true, message: "Pothole reported", data: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const locationMonitoring = async (req, res) => {
  try {
    const { driverLicenseNumber, vehicleLocation } = req.body;
    const updated = await adminModel.findOneAndUpdate(
      { driverLicenseNumber },
      { vehicleLocation },
      { new: true }
    );
    res.status(200).json({ success: true, message: "Location updated", data: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const incidentReport = async (req, res) => {
  try {
    const { driverLicenseNumber, incidentReport } = req.body;
    const updated = await adminModel.findOneAndUpdate(
      { driverLicenseNumber },
      { incidentReport },
      { new: true }
    );
    res.status(200).json({ success: true, message: "Incident reported", data: updated });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// === Emergency ===
export const emergency = async (req, res) => {
  try {
    const emergencyData = await adminModel.find({}, "emergencyStatus emergencyLocation emergencyDescription");
    res.status(200).json({ success: true, data: emergencyData });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const activeUser = async (req, res) => {
  try {
    const users = await adminModel.find({ userStatus: "Active" });
    res.status(200).json({ success: true, data: users });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
