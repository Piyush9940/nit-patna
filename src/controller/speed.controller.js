import { response } from "express";
import speed from "../models/speed.model.js";
// Desc: Get speed limit
export const speedAlert = async (req, res) => {
    try{
        const speedLimit = await speed.find();
        res.status(200).json(speedLimit);
        const currentSpeed = await speed.find();
        res.status(200).json(currentSpeed);
        const speedStatus = await speed.find();
        res.status(200).json(speedStatus);
        if (!speedLimit) {
            return res.status(404).json({ message: "Speed limit not found" });
        }
        if(!currentSpeed){
            return res.status(404).json({ message: "Current speed not found" });
        }
        if(!speedStatus){
            return res.status(404).json({ message: "Speed status not found" });
        }
        if(speedLimit<=0){
            return res.status(404).json({ message: "Invalid speed limit" });

        }
        if (currentSpeed<0){
            return res.status(404).json({ message: "Invalid current speed" });

        }

    
        
}
    catch (error) {
        console.error("Error fetching speed limit:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
// Desc: Get speed limit by id
export const getSpeedById = async (req, res) => {
    try {
        const { id } = req.params;
        const speedLimit = await speed.findById(id);
        if (!speedLimit) {
            return res.status(404).json({ message: "Speed limit not found" });
        }
        res.status(200).json(speedLimit);
    } catch (error) {
        console.error("Error fetching speed limit by ID:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
//desc:Get speed limit by qr code
export const getSpeedByQrCode = async (req, res) => {
    try {
        const { qrCode } = req.params;
        const speedLimit = await speed.find({ qrCode: { $regex: qrCode, $options: "i" } });
        if (!speedLimit) {
            return res.status(404).json({ message: "Speed limit not found" });
        }
        res.status(200).json(speedLimit);
    } catch (error) {
        console.error("Error fetching speed limit by QR code:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
// Desc: Update speed limit
export const updateSpeedLimit = async (req, res) => {
    try {
        const { id } = req.params;
        const { speedLimit, currentSpeed, speedStatus, speedDescription, speedLocation, speedFineAmount } = req.body;
        const updatedSpeed = await speed.findByIdAndUpdate(
            id,
            {
                speedLimit,
                currentSpeed,
                speedStatus,
                speedDescription,
                speedLocation,
                speedFineAmount
            },
            { new: true }
        );
        res.status(200).json(updatedSpeed);
    } catch (error) {
        console.error("Error updating speed limit:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
if (speedLimit>=currentSpeed){
    return res.status(200).json({ message: "speed under controll" });
}
else if (speedLimit<currentSpeed){
    return res.status(200).json({ message: "overSpeed" });
}
else{
    return res.status(200).json({ message: "speed normal" });
}
if (response.status(200).json({ message: "speed normal" })){
     console.log("speed normal")
}
if (response.status(200).json({ message: "overSpeed" })){
     console.log("overSpeed")
     res.body = {
        message: "overSpeed"


    };

    res.status(200).json(res.body);
}
