import mongoose from mongoose;
const liscenceSchemea = new mongoose.Schema(
    {
        liscenceNumber: {
            type: String,
            required: true,
        },
        liscenceType: {
            type: String,
            required: true,
        },
        liscenceStatus: {
            type: String,
            required: true,
            default: "Active",
        },
        liscenceStartDate: {
            type: Date,
            required: true,
        },
        liscenceEndDate: {
            type: Date,
            required: true,
        },
        liscenceHolderName: {
            type: String,
            required: true,
        },
        liscenceHolderAddress: {
            type: String,
            required: true,
        },
        liscenceHolderPhone: {
            type: String,
            required: true,
        }

    },
    { timestamps: true }
);
const liscenceModel = mongoose.model("Liscence", liscenceSchemea);
export default liscenceModel;
        

    