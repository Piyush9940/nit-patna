import liscenceModel from "../models/liscence.model.js";
export const liscenceAlert = async (req, res) => {
    try{
        const liscenceLimit = await liscenceModel.find();
        res.status(200).json(liscenceLimit);
        const currentLiscence = await liscenceModel.find();
        res.status(200).json(currentLiscence);
        const liscenceStatus = await liscenceModel.find();
        res.status(200).json(liscenceStatus);
        if (!liscenceLimit) {
            return res.status(404).json({ message: "Liscence limit not found" });
        }
        if(!currentLiscence){
            return res.status(404).json({ message: "Current liscence not found" });
        }
        if(!liscenceStatus){
            return res.status(404).json({ message: "Liscence status not found" });
        }
        if(liscenceLimit<=0){
            return res.status(404).json({ message: "Invalid liscence limit" });

        }
        if (currentLiscence<0){
            return res.status(404).json({ message: "Invalid current liscence" });

        }
    
    }
    catch (error) {
        console.error("Error fetching liscence limit:", error);
        res.status(500).json({ message: "Internal server error" });
    
    }
}
// // Desc: Get liscence limit by id
export const getLiscenceById = async (req, res) => {
    try {
        const { id } = req.params;
        const liscenceLimit = await liscenceModel.findById(id);
        if (!liscenceLimit) {
            return res.status(404).json({ message: "Liscence limit not found" });
        }
        res.status(200).json(liscenceLimit);
    } catch (error) {
        console.error("Error fetching liscence limit by ID:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
// //desc:Get liscence limit by qr code
export const getLiscenceByQrCode = async (req, res) => {
    try {
        const { qrCode } = req.params;
        const liscenceLimit = await liscenceModel.find({ qrCode: { $regex: qrCode, $options: "i" } });
        if (!liscenceLimit) {
            return res.status(404).json({ message: "Liscence limit not found" });
        }
        res.status(200).json(liscenceLimit);
    } catch (error) {
        console.error("Error fetching liscence limit by ID:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
// //desc:Get liscence limit by name
export const getLiscenceByName = async (req, res) => {
    try {
        const { liscenceName } = req.params;
        const liscenceLimit = await liscenceModel.find({ liscenceName: { $regex: liscenceName, $options: "i" } });
        if (!liscenceLimit) {
            return res.status(404).json({ message: "Liscence limit not found" });
        }
        res.status(200).json(liscenceLimit);
    } catch (error) {
        console.error("Error fetching liscence limit by name:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
