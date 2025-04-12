import adminreportModel from "../models/admin.report.model";
import {getHospitalByLocation,getHospitalsFromDB,getHospitalById,getHospitalByName,getHospitalByQrCode } from "../controllers/hospital.controller";

// Fetch user report data and categorize based on priority
export const getCategorizedReports = async (req, res) => {
    try {
        // Fetch all user report data
        const reports = await adminreportModel.find();
        if (!reports || reports.length === 0) {
            return res.status(404).json({ message: "No reports found" });
        }

        // Categorize reports based on priority
        const categorizedReports = {
            high: reports.filter(report => report.priority?.toLowerCase() === "high"),
            medium: reports.filter(report => report.priority?.toLowerCase() === "medium"),
            low: reports.filter(report => report.priority?.toLowerCase() === "low"),
        };

        res.status(200).json(categorizedReports);
    } catch (error) {
        console.error("Error fetching and categorizing reports:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
export const searchResults = async (req, res) => {
    try{
        //fetch all user report data
        const searchResults = await adminreportModel.find();
        res.status(200).json(searchResults);
        if (!searchResults) {
            return res.status(404).json({ message: "Search results not found" });
        }
        res.status(200).json(searchResults);
        //prioritty wise search results
        const priorityResults = await adminreportModel.find({ priority: { $regex: "high", $options: "i" } });
        res.status(200).json(priorityResults);
        if (!priorityResults) {
            return res.status(404).json({ message: "Priority results not found" });
        }
    
        


    }
    catch (error) {
        console.error("Error fetching search results:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

//edit report status
export const updateReport = async (req, res) => {
    try {
        const { id } = req.params;
        const { reportStatus } = req.body;
        const updatedReport = await adminreportModel.findByIdAndUpdate(
            id,
            {
                reportStatus
            },
            { new: true }
        );
        res.status(200).json(updatedReport);
    } catch (error) {
        console.error("Error updating report status:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
//delete report
export const deleteReport = async (req, res) => {
    try {
        const { id } = req.params;
        await adminreportModel.findByIdAndDelete(id);
        res.status(200).json({ message: "Report deleted successfully" });
    } catch (error) {
        console.error("Error deleting report:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
//emergency dispatch dashcam
export const emergencyDispatch = async (req, res) => {
    try {
        const { id } = req.params;
        const emergencyDispatch = await adminreportModel.findById(id);
        if (!emergencyDispatch) {
            return res.status(404).json({ message: "Emergency dispatch not found" });
        }
        res.status(200).json(emergencyDispatch);
    } catch (error) {
        console.error("Error fetching emergency dispatch:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
//emergency dispatch by qr code
export const emergencyDispatchByQrCode = async (req, res) => {
    try {
        const { qrCode } = req.params;
        const emergencyDispatch = await adminreportModel.find({ qrCode: { $regex: qrCode, $options: "i" } });
        if (!emergencyDispatch) {
            return res.status(404).json({ message: "Emergency dispatch not found" });
        }
        res.status(200).json(emergencyDispatch);
    } catch (error) {
        console.error("Error fetching emergency dispatch by QR code:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
//fetch report location
export const reportLocation = async (req, res) => {
    try {
        const { id } = req.params;
        const reportLocation = await adminreportModel.findById(id);
        if (!reportLocation) {
            return res.status(404).json({ message: "Report location not found" });
        }
        res.status(200).json(reportLocation);
    } catch (error) {
        console.error("Error fetching report location:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
//fetch report location by qr code
export const reportLocationByQrCode = async (req, res) => {
    try {
        const { qrCode } = req.params;
        const reportLocation = await adminreportModel.find({ qrCode: { $regex: qrCode, $options: "i" } });
        if (!reportLocation) {
            return res.status(404).json({ message: "Report location not found" });
        }
        res.status(200).json(reportLocation);
    } catch (error) {
        console.error("Error fetching report location by QR code:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
//fetch image of report
export const reportImage = async (req, res) => {
    try {
        const { id } = req.params;
        const reportImage = await adminreportModel.findById(id);
        if (!reportImage) {
            return res.status(404).json({ message: "Report image not found" });
        }
        res.status(200).json(reportImage);
    } catch (error) {
        console.error("Error fetching report image:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
//send prior emergency guide
export const sendPriorityEmergencyGuide = async (req, res) => {
    try {
        const { id } = req.params;
        const { emergencyGuide } = req.body;
        const sendPriorityEmergencyGuide = await adminreportModel.findByIdAndUpdate(
            id,
            {
                emergencyGuide
            },
            { new: true }


        );
        if (!sendPriorityEmergencyGuide) {
            return res.status(404).json({ message: "Send priority emergency guide not found" });
        }
        
        res.status(200).json(sendPriorityEmergencyGuide);
        if (priority=="high"){
            //fetch current location and from vehicleid and send location to nearest hospital
            const currentLocation = await adminreportModel.findById(vehicleId);
            if (!currentLocation) {
                return res.status(404).json({ message: "Current location not found" });
            }
            res.status(200).json(currentLocation);
        }
        //send location to nearest hospital from google api
        const nearestHospital = await getHospitalsFromDB(currentLocation);
        // fetch hospital contact details from hospital controller
        const hospitalContactDetails = await getHospitalByLocation(currentLocation);
        if (!hospitalContactDetails) {
            return res.status(404).json({ message: "Hospital contact details not found" });
        }
        res.status(200).json(hospitalContactDetails);
        // send location to contact details
        const sendLocationToContactDetails = await getHospitalById(hospitalContactDetails);
        const contactDetails = await getHospitalByName(hospitalContactDetails);
        



             






















































































































































































        