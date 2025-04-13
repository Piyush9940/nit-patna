import Traffic from "../models/trafficModel.js";

// Create a new traffic report
export const createTrafficReport = async (req, res) => {
    try {
        const {
            trafficStatus,
            trafficDescription,
            coordinates, // [longitude, latitude]
            trafficFineAmount,
            publicTransport,
            trafficAlertLevel,
        } = req.body;

        const newReport = new Traffic({
            trafficStatus,
            trafficDescription,
            trafficLocation: {
                type: "Point",
                coordinates,
            },
            trafficFineAmount,
            publicTransport,
            trafficAlertLevel,
        });

        await newReport.save();
        res.status(201).json({ message: "Traffic report created successfully", data: newReport });
    } catch (error) {
        res.status(500).json({ message: "Failed to create traffic report", error: error.message });
    }
};

// Get all traffic reports
export const getAllTrafficReports = async (req, res) => {
    try {
        const reports = await Traffic.find().sort({ createdAt: -1 });
        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch traffic reports", error: error.message });
    }
};

// Get traffic reports near a location
export const getNearbyTrafficReports = async (req, res) => {
    try {
        const { longitude, latitude, radius = 5000 } = req.query; // radius in meters

        const reports = await Traffic.find({
            trafficLocation: {
                $nearSphere: {
                    $geometry: {
                        type: "Point",
                        coordinates: [parseFloat(longitude), parseFloat(latitude)],
                    },
                    $maxDistance: parseInt(radius),
                },
            },
        });

        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch nearby traffic reports", error: error.message });
    }
};

// Get a single report by ID
export const getTrafficReportById = async (req, res) => {
    try {
        const report = await Traffic.findById(req.params.id);
        if (!report) return res.status(404).json({ message: "Traffic report not found" });

        res.status(200).json(report);
    } catch (error) {
        res.status(500).json({ message: "Error fetching traffic report", error: error.message });
    }
};

// Update a traffic report
export const updateTrafficReport = async (req, res) => {
    try {
        const updatedReport = await Traffic.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        if (!updatedReport) return res.status(404).json({ message: "Traffic report not found" });

        res.status(200).json({ message: "Traffic report updated", data: updatedReport });
    } catch (error) {
        res.status(500).json({ message: "Error updating traffic report", error: error.message });
    }
};

// Delete a traffic report
export const deleteTrafficReport = async (req, res) => {
    try {
        const deleted = await Traffic.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: "Traffic report not found" });

        res.status(200).json({ message: "Traffic report deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete traffic report", error: error.message });
    }
};
