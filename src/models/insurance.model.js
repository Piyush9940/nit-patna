import mongoose from "mongoose";
const insuranceSchema = new mongoose.Schema(
{
    insuranceType: {
        type: String,
        required: true,
    },
    insuranceID:{
        type:String,
        required:true,
        minlength: 8,
        maxlength: 25,
        unique: true,
        unique: true,
        caseSensitive: true,
        trim: true,
        hidden: true,

        






    },
    insuranceAmount: {
        type: Number,
        required: true,
    },
    insuranceStatus: {
        type: String,
        required: true,
        default: "Active",
    },
    insuranceStartDate: {
        type: Date,
        required: true,
    },
    insuranceEndDate: {
        type: Date,
        required: true,
    },
    insuranceCompany: {
        type: String,
        required: true,
    },
    insurancePolicyNumber: {
        type: String,
        required: true,
    },
    insuranceClaimStatus: {
        type: String,
        required: true,
        default: "Pending",
    },
    insuranceClaimAmount: {
        type: Number,
        required: false,
    },
    insuranceClaimDate: {
        type: Date,
        required: false,
    },
    insuranceClaimDescription: {
        type: String,
        required: false,
    },
    insuranceClaimDocuments: {
        type: [String,"documents are required"], 
        required: true,
    },
    insuranceClaimApprovalStatus: {
        type: String,
        required: false,
    },
    insuranceClaimApprovalDate: {
        type: Date,
        required: false,
    },
    insuranceClaimApprovalDocuments: {
        type: [String],
        required: false,
    },
    insuranceClaimFeedback: {
        type: String,
        required: false,
    },
    insuranceClaimFeedbackDate: {
        type: Date,
        required: false,
    },
    insuranceClaimFeedbackDocuments: {
        type: [String],
        required: false,
    },
    insuranceClaimFeedbackStatus: {
        type: String,
        required: false,
    },
    insuranceClaimFeedbackApprovalStatus: {
        type: String,
        required: false,
    },
    insuranceClaimFeedbackApprovalDate: {
        type: Date,
        required: false,
    },
    insuranceClaimFeedbackApprovalDocuments: {
        type: [String],
        required: false,
    },
    insuranceTestStatus: {
        type: String,
        required: false,
    },
    insuranceTestDate: {
        type: Date,
        required: false,
    },
    insuranceTestResult: {
        type: [String],
        required: true,
    },
    insuranceweeklyReport: {
        type: [String],
        required: true,
    },
    driverID: {
        type: String,
        required: true,
    },
    driverExperience: {
        type: Number,
        required: true,
    },
    driverLicenseNumber: {
        type: String,
        required: true,
    },
    vehicleAge: {
        type: Number,
        required: true,
    },
    vehicleType: {
        type: String,
        required: true,
    },
    vehicleCost: {
        type: Number,
        required: true,
    },
    vehicleModel: {
        type: String,
        required: true,
    },
    vehicleRegistrationNumber: {
        type: String,
        required: true,
    },
    vehicleRegistrationDate: {
        type: Date,
        required: true,
    },
    vehicleRegistrationExpiryDate: {
        type: Date,
        required: true,
    },
    trafficViolation: {
        type: String,
        required: true,
    },
    trafficViolationDate: {
        type: Date,
        required: true,
    },
    trafficViolationAmount: {
        type: Number,
        required: true,
    },
    maintainanceFrequency: {
        type: String,
        required: true,
        default: "Normal",
        minValue:0,
        maxValue: 2,
    },
    maintainanceDate: {
        type: Date,
        required: true,
    },

},
{ timestamps: true }
);
const insuranceModel = mongoose.model("Insurance", insuranceSchema);
// insuranceModel.createIndexes({ insuranceType: 1, insuranceCompany: 1 }, { unique: true });
export default insuranceModel;