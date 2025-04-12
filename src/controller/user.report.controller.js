import userReportModel from "../models/user.report.model";
export const userReport = async (req, res) => {
    try{
        //add report to database regarding potholes, accidents, and other issues
        const { reportType, description, location, image } = req.body;
        const newReport = new userReportModel({
            reportType,
            description,
            location,
            image
        });
        await newReport.save();
        res.status(201).json(newReport);
        //display previous reports
        const previousReports = await userReportModel.find();
        res.status(200).json(previousReports);
        if (!previousReports) {
            return res.status(404).json({ message: "Previous reports not found" });
        }
        if (!newReport) {
            return res.status(404).json({ message: "New report not found" });
        }
        if (!reportType) {
            return res.status(404).json({ message: "Report type not found" });
        }
        if (!description) {
            return res.status(404).json({ message: "Description not found" });
        }
        if (!location) {
            return res.status(404).json({ message: "Location not found" });
        }
        if (!image) {
            return res.status(404).json({ message: "Image not found" });
        }
        if (reportType === "") {
            return res.status(404).json({ message: "Invalid report type" });
        }
        if (description === "") {
            return res.status(404).json({ message: "Invalid description" });
        }
        if (location === "") {
            return res.status(404).json({ message: "Invalid location" });
        }
        if (image === "") {
            return res.status(404).json({ message: "Invalid image" });
        }
        if (image.length > 0) {
            return res.status(404).json({ message: "Invalid image" });
        }
        //status of report
        const reportStatus = await userReportModel.find();
        res.status(200).json(reportStatus);
        if (!reportStatus) {
            return res.status(404).json({ message: "Report status not found" });
        }
        if (reportStatus === "") {
            return res.status(404).json({ message: "Invalid report status" });
        }
         //setting priority of report on the basis of report type
         
        if (reportType === "accident") {
            priority = "high";
            return priority;
        }
        if (reportType === "pothole") {
            priority = "medium";
            return priority;
        }
        if (reportType === "other") {
            priority = "low";
            return priority;
        }
        if (priority==="high"){
            alert("High priority report. Please take immediate action.");
            setTimeout(() => {
                alert("High priority report. Please take immediate action.");
            }, 5000);
        }
        if (priority==="medium"){
            alert("Medium priority report. Please take action.");
            setTimeout(() => {
                alert("Medium priority report. Please take action.");
            }, 5000);
        }
        if (priority==="low"){
            alert("Low priority report. Please take action.");
            setTimeout(() => {
                alert("Low priority report. Please take action.");
            }, 5000);
        }
        //response to user
        res.status(200).json({ message: "Report submitted successfully" });


    }
    catch (error) {
        console.error("Error fetching user report:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
// Desc: Get user report by id
export const getUserReportById = async (req, res) => {
    try {
        const { id } = req.params;
        const userReport = await userReportModel.findById(id);
        if (!userReport) {
            return res.status(404).json({ message: "User report not found" });
        }
        res.status(200).json(userReport);
    } catch (error) {
        console.error("Error fetching user report by ID:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}