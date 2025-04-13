import mongoose from "mongoose";
const speedSchema = new mongoose.Schema(
{
  permission: {
    type: String,
    required: true,
  },
  driverMessage: {
    type: String,
    required: true,
  },
  adminMessage: {
    type: String,
    required: true,
  },
  driverLiscenseNumber: {
    type: String,
    required: true,
  },
  vehicleNumber: {
    type: String,
    required: true,
  },
    driverName: {
        type: String,
        required: true,
    },
    speedLimit: {
        type: Number,
        required: true,
    },
    currentSpeed: {
        type: Number,
        required: true,
    },
    speedStatus: {
        type: String,
        required: true,
        default: "Normal",
    },
    speedDescription: {
        type: String,
        required: true,
    },
    vechicleLocation: {
        type: String,
        required: true,
    },
    speedFine: {
        type: Number,
        required: true,
        default: 0,
    },
    fineHistory: {
        type: String,
        required: true,
        default: "No history available",
    },
    finePayment: {
        type: Number,
        required: true,
        default: 0,
    },
    driverCam: {
        type: String,
        required: true,
    },
    driverCamStatus: {
        type: String,
        required: true,
        default: "Normal",
    },
    accidentType: {
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
    potHoleLocation: {
        type: String,
        required: true,
    },
    userStatus: {
        type: String,
        required: true,
        default: "Active",
    },
    emergencyStatus: {
        type: String,
        required: true,
        default: "Normal",
    },
    emergencyDescription: {
        type: String,
        required: true,
    },
    emergencyLocation: {
        type: String,
        required: true,
    },
    // Emergency dispatch camera
    emergencyCamStatus: {
        type: String,
        required: true,
        default: "Normal",
    },
    emergencyCam: {
        type: String,
        required: true,
    },


},
{timestamps:true}
);
const adminModel= mongoose.model("Admin", speedSchema);
export default adminModel;
// speedModel.createIndexes({ CurrentSpeed: 1, speedLimit: 1 }, { unique: true });