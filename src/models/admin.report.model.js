import mongoose from 'mongoose';
const reportSchema= new mongoose.Schema(
    {
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
        potHoleLocation: {
            type: String,
            required: true,
        },
        userStatus: {
            type: String,
            required: true,
            default: 'Active',
        },
        emergencyStatus: {
            type: String,
            required: true,
            default: 'Normal',
        },
        emergencyDescription: {
            type: String,
            required: true,
        },
        emergencyLocation: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);
const adminreportModel = mongoose.model('Report', reportSchema);
export default adminreportModel;
