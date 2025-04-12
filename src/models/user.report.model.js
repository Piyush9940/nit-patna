import mongoose from "mongoose";
const userReportSchema= new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
            unique: true,
            minlength: 8,
            maxlength: 25,
            caseSensitive: true,

        },
        userName: {
            type: String,
            required: true,
            unique: true,

        },
        userEmail: {
            type: String,
            required: true,
            unique: true,
            match: /.+\@.+\..+/,
            trim: true,

        },
        userPhone: {
            type: String,
            required: true,
            unique: true,
            minlength: 10,
            maxlength: 10,
        },
        userStatus: {
            type: String,
            required: true,
            default: "Active",
        },
        reportType: {
            type: String,
            required: true,
            enum: ["Accident", "Emergency", "Pothole"],
            
        },
        reportImage: {
            type: String,
            required: true,
        },
        

        accidentDescription: {
            type: String,
            required: true,

        },
        accidentLocation: {
            type: String,
            required: true,
        },
        potHoleLocation: {
            type: String,
            required: true,
        },
        potHoleDescription: {
            type: String,
            required: true,
        },
        incidentReport: {
            type: String,
            required: true,
        },
        reportStatus: {
            type: String,
            required: true,
            default: "Pending",
        },
        emergencyStatus: {
            type: String,
            required: true,
            default: "Normal",
        },
    },
    { timestamps:true }
);
const userReportModel = mongoose.model("UserReport", userReportSchema);
export default userReportModel;

