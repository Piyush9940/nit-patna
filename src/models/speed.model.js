import mongoose from "mongoose";
const speedSchema = new mongoose.Schema(
    {
        speedLimit: {
            type: Number,
            required: true,
            
        },
        currentSpeed: {
            type: Number,
            required: true,
            minValue: 0,
            maxValue: 200,
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
        speedLocation: {
            type: String,
            required: true,
        },
        speedFineAmount: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);
const speedModel = mongoose.model("Speed", speedSchema);
export default speedModel;