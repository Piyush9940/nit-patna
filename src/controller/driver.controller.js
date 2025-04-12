import driver from "../routes/driver.route";
export const getDriverProfile = async (req, res) => {
    try {
        const driverProfile = await driver.find();
        res.status(200).json(driverProfile);
    } catch (error) {
        console.error("Error fetching driver profile:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const addDriverProfile = async (req, res) => {
    try {
        const { driverName, driverLicense, driverPhone } = req.body;
        const newDriver = new driver({
            driverName,
            driverLicense,
            driverPhone
        });
        await newDriver.save();
        res.status(201).json(newDriver);
    } catch (error) {
        console.error("Error adding driver profile:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const updateDriverProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const { driverName, driverLicense, driverPhone } = req.body;
        const updatedDriver = await driver.findByIdAndUpdate(
            id,
            {
                driverName,
                driverLicense,
                driverPhone
            },
            { new: true }
        );
        res.status(200).json(updatedDriver);
    } catch (error) {
        console.error("Error updating driver profile:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const deleteDriverProfile = async (req, res) => {
    try {
        const { id } = req.params;
        await driver.findByIdAndDelete(id);
        res.status(200).json({ message: "Driver profile deleted successfully" });
    } catch (error) {
        console.error("Error deleting driver profile:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const getDriverById = async (req, res) => {
    try {
        const { id } = req.params;
        const driverProfile = await driver.findById(id);
        if (!driverProfile) {
            return res.status(404).json({ message: "Driver profile not found" });
        }
        res.status(200).json(driverProfile);
    } catch (error) {
        console.error("Error fetching driver profile by ID:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const getDriverByName = async (req, res) => {
    try {
        const { driverName } = req.params;
        const driverProfile = await driver.find({ driverName: { $regex: driverName, $options: "i" } });
        if (!driverProfile) {
            return res.status(404).json({ message: "Driver profile not found" });
        }
        res.status(200).json(driverProfile);
    } catch (error) {
        console.error("Error fetching driver profile by name:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const getLicense = async (req, res) => {
    try {
        const license = await driver.find();
        res.status(200).json(license);
    } catch (error) {
        console.error("Error fetching license:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const addLicense = async (req, res) => {
    try {
        const { licenseNumber, licenseType, issueDate, expiryDate } = req.body;
        const newLicense = new driver({
            licenseNumber,
            licenseType,
            issueDate,
            expiryDate
        });
        await newLicense.save();
        res.status(201).json(newLicense);
    } catch (error) {
        console.error("Error adding license:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const updateLicense = async (req, res) => {
    try {
        const { id } = req.params;
        const { licenseNumber, licenseType, issueDate, expiryDate } = req.body;
        const updatedLicense = await driver.findByIdAndUpdate(
            id,
            {
                licenseNumber,
                licenseType,
                issueDate,
                expiryDate
            },
            { new: true }
        );
        res.status(200).json(updatedLicense);
    } catch (error) {
        console.error("Error updating license:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const deleteLicense = async (req, res) => {
    try {
        const { id } = req.params;
        await driver.findByIdAndDelete(id);
        res.status(200).json({ message: "License deleted successfully" });
    } catch (error) {
        console.error("Error deleting license:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const getDriverHistory = async (req, res) => {
    try {
        const driverHistory = await driver.find();
        res.status(200).json(driverHistory);
    } catch (error) {
        console.error("Error fetching driver history:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const driverFine = async (req, res) => {
    try {
        const { fineAmount, fineReason } = req.body;
        const newFine = new driver({
            fineAmount,
            fineReason
        });
        await newFine.save();
        res.status(201).json(newFine);
    } catch (error) {
        console.error("Error adding driver fine:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const driverPayment = async (req, res) => {
    try {
        const { paymentAmount, paymentMethod } = req.body;
        const newPayment = new driver({
            paymentAmount,
            paymentMethod
        });
        await newPayment.save();
        res.status(201).json(newPayment);
    } catch (error) {
        console.error("Error adding driver payment:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
