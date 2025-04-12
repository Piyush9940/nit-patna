import mongoose from 'mongoose';
const driverSchema = new mongoose.Schema({
    driverName: {
        type: String,
        required: true,
    },
    driverLicenseNumber: {
        type: String,
        required: true,
    },
    driverLicenseExpiryDate: {
        type: Date,
        required: true,
    },

    driverEmail: {
        type: String,
        required: true,
    },
    
    driverStatus: {
        type: String,
        required: true,
        default: 'Active',
    },
    chatbotResponse: {
        type: String,
        required: true,
        default: 'working on your querry',
    },
    userprompt: {
        type: String,
        required: true,
    },
    sleepAlert: {
        type: String,
        required: true,
        default: 'you are awake',
    },
    speedAlert: {
        type: String,
        required: true,
        default: 'you are within speed limit',
    },
    driverFine: {
        type: Number,
        required: true,
        default: 0,
    },
    driverHistory: {
        type: String,
        required: true,
        default: 'No history available',
    },
    driverPayment: {
        type: Number,
        required: true,
        default: 0,
    },




}, { timestamps: true });
const driverModel = mongoose.model('Driver', driverSchema);
export default driverModel;

