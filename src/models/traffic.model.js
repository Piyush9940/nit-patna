import mongoose from "mongoose";

const trafficSchema = new mongoose.Schema(
    {
        trafficStatus: {
            type: String,
            enum: ["Normal", "Heavy", "Blocked", "Accident", "Construction"],
            required: true,
            default: "Normal",
        },
        trafficDescription: {
            type: String,
            required: true,
        },
        trafficLocation: {
            type: {
                type: String,
                enum: ['Point'],
                default: 'Point',
            },
            coordinates: {
                type: [Number], // [longitude, latitude]
                required: true,
            },
        },
        trafficFineAmount: {
            type: Number,
            required: true,
        },
        publicTransport: {
            type: String,
            enum: ["Available", "Delayed", "Suspended", "Unavailable"],
            required: true,
        },
        trafficAlertLevel: {
            type: String,
            enum: ["Low", "Medium", "High", "Critical"],
            required: true,
        },
    },
    { timestamps: true }
);

// Add geospatial index for efficient queries
trafficSchema.index({ trafficLocation: "2dsphere" });

const trafficModel = mongoose.model("Traffic", trafficSchema);
export default trafficModel;
