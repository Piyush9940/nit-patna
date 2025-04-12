import mongoose from "mongoose";
const helpSchema = new mongoose.Schema(
    {
        help: {
            type: String,
            required: true,
        },
        helpStatus: {
            type: String,
            required: true,
            default: "Normal",
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        helpDescription: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);
const helpModel = mongoose.model("Help", helpSchema);
export default helpModel;