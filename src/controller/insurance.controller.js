import insuranceModel from "../models/insurance.model";
import driverModel from "../models/driver.model";
export const getInsurance = async (req, res) => {
    try {
        const driverId = req.params.driverId;
        const driver = await driverModel.findById(driverId);
        const insurance = await insuranceModel.find({ driverId: driverId });
        const insuranceData = insurance.map((insurance) => ({
            insuranceId: insurance._id,
            insuranceType: insurance.insuranceType,
            insuranceCompany: insurance.insuranceCompany,
            insurancePolicyNumber: insurance.insurancePolicyNumber,
            insuranceStartDate: insurance.insuranceStartDate,
            insuranceEndDate: insurance.insuranceEndDate,
            insuranceClaimStatus: insurance.insuranceClaimStatus,
            insuranceClaimAmount: insurance.insuranceClaimAmount,
            driverId: driverId, // Include driverId in the response
            insuranceStatus: insurance.insuranceStatus,
            insuranceAmount: insurance.insuranceAmount,
            insuranceClaimDate: insurance.insuranceClaimDate,
            insuranceClaimDescription: insurance.insuranceClaimDescription,
            insuranceWeeklyResult: insurance.insuranceWeeklyResult,
            insuanceTestResult: insurance.insuranceTestResult,
            driverName: driver.driverName,
            driverExperience: insurance.driverExperience,
            driverLicenseNumber: insurance.driverLicenseNumber,
            driverLicenseExpiryDate: insurance.driverLicenseExpiryDate,
            vehcileNumber: insurance.vehicleNumber,
            vehicleModel: insurance.vehicleModel,
            vehicleType: insurance.vehicleType,
            vehicleCost: insurance.vehicleCost,
            trafficViolation: insurance.trafficViolation,
            trafficViolationDate: insurance.trafficViolationDate,
            trafficViolationAmount: insurance.trafficViolationAmount,
            vehicleRegistrationNumber: insurance.vehicleRegistrationNumber,
            vehicleRegistrationDate: insurance.vehicleRegistrationDate,
            vehicleRegistrationExpiryDate: insurance.vehicleRegistrationExpiryDate,
            maintainanceDate: insurance.maintenanceDate,
            maintainanceFrequency: insurance.maintenanceFrequency,


        }));
        if (insuranceData.length === 0) {
            return res.status(404).json({ message: "No insurance data found for this driver" });
        }
        if (insuranceId.length === 0) {
            return res.status(404).json({ message: "Invalid insurance id" });
        }
        if (!driver){
            return res.status(404).json({message:"Invalid driver ID"});
        };
        if (!insurance){
            return res.status(404).json({message:"insurance not available"});
        }
        if (!insuranceData) {
            return res.status(404).json({ message: "Insurance data not found" });
        }
        if(!insuranceType){
            return res.status(404).json({message:"Insurance type not available"});
        }
        if (!insuranceCompany){
            return res.status(404).json({message:"Insurance company not available"});
        }
        if (!insurancePolicyNumber){
            return res.status(404).json({message:"Insurance policy number not available"});
        }
        if (!insuranceStartDate){
            return res.status(404).json({message:"Insurance start date not available"});
        }
        if (!insuranceEndDate){
            return res.status(404).json({message:"Insurance end date not available"});
        }
        if (!insuranceClaimStatus){
            return res.status(404).json({message:"Insurance claim status not available"});
        }
        if (!insuranceClaimAmount){
            return res.status(404).json({message:"Insurance claim amount not available"});
        }
        if(insuranceEndDate<insuranceStartDate){
            return res.status(404).json({message:"Insurance end date should be greater than start date"});
        }
        if(insuranceEndDate<currentDate){
            return res.status(404).json({message:"insurnce expired"});
            res.render("Insurance expired");//html page of insurance form 


        }
        if(!driverName){
            return res.status(404).json({message:"Driver name not available"});
        }
        if (!driverExperience){
            return res.status(404).json({message:"Driver experience not available"});
        }
        if (!driverLicenseNumber){
            return res.status(404).json({message:"Driver license number not available"});
        }
        if (!driverLicenseExpiryDate){
            return res.status(404).json({message:"Driver license expiry date not available"});
        }
        if (!vehicleNumber){
            return res.status(404).json({message:"Vehicle number not available"});
        }
        if (!vehicleModel){
            return res.status(404).json({message:"Vehicle model not available"});
        }
        if (!vehicleType){
            return res.status(404).json({message:"Vehicle type not available"});
        }
        if (!vehicleCost){
            return res.status(404).json({message:"Vehicle cost not available"});
        }
        if (!vehicleRegistrationNumber){
            return res.status(404).json({message:"Vehicle registration number not available"});
        }
        if (!vehicleRegistrationDate){
            return res.status(404).json({message:"Vehicle registration date not available"});
        }
        if (!vehicleRegistrationExpiryDate){
            return res.status(404).json({message:"Vehicle registration expiry date not available"});
        }
        if (trafficViolation&& !trafficViolationDate){
            return res.status(404).json({message:"Traffic violation date not available"});
        }
        if (trafficViolation&& !trafficViolationAmount){
            return res.status(404).json({message:"Traffic violation amount not available"});
        }
        if (!insuranceStatus){
            return res.status(404).json({message:"Insurance status not available"});
        }

        if(insuranceStartDate<currentDate){
            return res.status(404).json({message:"Insurance start date should be greater than current date"});
             
            
        };
        if(insuranceClaimStatus==="Approved"){
            return res.status(404).json({message:"Insurance claim is already approved"});
        }
        if(insuranceClaimStatus==="Rejected"){
            return res.status(404).json({message:"Insurance claim is already rejected"});
        }
        if(insuranceClaimDescription===""){
            return res.status(404).json({message:"Insurance claim description is required"});
        }
        // error data not found
         
        
        if (insuranceTestResult<=5){
            res.render("Insurance test result failed");//html page of insurance form
            res.status(200).json({ message: "below average " });

        }
        if (7<insuranceTestResult>5){
            res.render("Insurance test result passed");//html page of insurance form
            res.status(200).json({ message: "average " });
        }
        if (insuranceTestResult>7){
            res.render("Insurance test result passed");//html page of insurance form
            res.status(200).json({ message: "above average " });
        }
        const weeklyReport= average(insuranceWeeklyResult);
        if (weeklyReport<=5){
            res.render("Insurance weekly report failed");//html page of insurance form
            res.status(200).json({ message: "below average " });

        }
        if (7<weeklyReport>5){
            res.render("Insurance weekly report passed");//html page of insurance form
            res.status(200).json({ message: "average " });
        }
        if (weeklyReport>7){
            res.render("Insurance weekly report passed");//html page of insurance form
            res.status(200).json({ message: "above average " });
        }
        if (maintainanceDate-currentDate>maintainanceFrequency){
            res.render("Insurance maintainance failed");//html page of insurance form
            res.status(200).json({ message: "below average " });

        }
        if (maintainanceDate-currentDate<maintainanceFrequency){
            res.render("Insurance maintainance passed");//html page of insurance form
            res.status(200).json({ message: "average " });
        }
        const allMessages = [
            insuranceTestResult > 5 && insuranceTestResult <= 7 ? "average" : null,
            weeklyReport > 5 && weeklyReport <= 7 ? "average" : null,
            maintainanceDate - currentDate < maintainanceFrequency ? "average" : null
        ];

        if (allMessages.every(message => message === "average")) {
            res.status(200).json({ message: "good" });
        }
        if (allMessages.every(message => message === "below average")) {
            res.status(200).json({ message: "bad" });
        }
        if (allMessages.every(message => message === "above average")) {
            res.status(200).json({ message: "excellent" });
        }
        if (allMessages.every(message => message === "average")) {
            res.status(200).json({ message: "good" });
        }
        

        
        
    } catch (error) {
        console.error("Error fetching insurance data:", error);
        res.status(500).json({ message: "Internal server error" });
        
    }
}
export const submitInsuranceClaim = async (req, res) => {
    try {
        const { driverId, insuranceId, insuranceClaimAmount, insuranceClaimDescription } = req.body;

        // Validate required fields
        if (!driverId || !insuranceId || !insuranceClaimAmount || !insuranceClaimDescription) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Find the insurance record
        const insurance = await insuranceModel.findById(insuranceId);
        if (!insurance) {
            return res.status(404).json({ message: "Insurance not found" });
        }

        // Update the insurance claim details
        insurance.insuranceClaimStatus = "Pending";
        insurance.insuranceClaimAmount = insuranceClaimAmount;
        insurance.insuranceClaimDescription = insuranceClaimDescription;
        await insurance.save();

        res.status(200).json({ message: "Insurance claim submitted successfully", insurance });
        
    } catch (error) {
        console.error("Error submitting insurance claim:", error);
        res.status(500).json({ message: "Internal server error" });
        
    }
}
export const getInsuranceClaimStatus = async (req, res) => {
    try {
        const { insuranceId } = req.body;

        // Validate required fields
        if (!insuranceId) {
            return res.status(400).json({ message: "Insurance ID is required" });
        }

        // Find the insurance record
        const insurance = await insuranceModel.findById(insuranceId);
        if (!insurance) {
            return res.status(404).json({ message: "Insurance not found" });
        }

        // Get the insurance claim status
        const claimStatus = insurance.insuranceClaimStatus;

        res.status(200).json({ message: "Insurance claim status fetched successfully", claimStatus });



    } catch (error) {
        console.error("Error fetching insurance claim status:", error);
        res.status(500).json({ message: "Internal server error" });
        
    }
}
export const getInsuranceHistory = async (req, res) => {
    try {
        const driverId = req.params.driverId;
        const insurance = await insuranceModel.find({ driverId: driverId });
        if (!insurance) {
            return res.status(404).json({ message: "Insurance not found" });
        }
        res.status(200).json({ message: "Insurance history fetched successfully", insurance });
    } catch (error) {
        console.error("Error fetching insurance history:", error);
        res.status(500).json({ message: "Internal server error" });
        
    }
}
export const renewInsurance = async (req, res) => {
    try{
        const { insuranceId, newEndDate } = req.body;

        // Validate required fields
        if (!insuranceId || !newEndDate) {
            return res.status(400).json({ message: "Insurance ID and new end date are required" });
        }

        // Find the insurance record
        const insurance = await insuranceModel.findById(insuranceId);
        if (!insurance) {
            return res.status(404).json({ message: "Insurance not found" });
        }

        // Update the insurance end date
        insurance.insuranceEndDate = newEndDate;
        await insurance.save();

        res.status(200).json({ message: "Insurance renewed successfully", insurance });


    }
    catch (error) {
        console.error("Error renewing insurance:", error);
        res.status(500).json({ message: "Internal server error" });
        
    }
}
export const processInsurancePayment = async (req, res) => {
    try {
        const { insuranceId, paymentAmount } = req.body;

        // Validate required fields
        if (!insuranceId || !paymentAmount) {
            return res.status(400).json({ message: "Insurance ID and payment amount are required" });
        }

        // Find the insurance record
        const insurance = await insuranceModel.findById(insuranceId);
        if (!insurance) {
            return res.status(404).json({ message: "Insurance not found" });
        }

        // Process the payment (this is a placeholder, implement your payment logic here)
        insurance.insuranceStatus = "Paid";
        await insurance.save();

        res.status(200).json({ message: "Insurance payment processed successfully", insurance });
    } catch (error) {
        console.error("Error processing insurance payment:", error);
        res.status(500).json({ message: "Internal server error" });
        
    }
}
export const getInsuranceQuote = async (req, res) => {
    try {
        const { driverId, vehicleType, vehicleCost } = req.body;

        // Validate required fields
        if (!driverId || !vehicleType || !vehicleCost) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Calculate the insurance quote (this is a placeholder, implement your quote calculation logic here)
        const insuranceQuote = vehicleCost * 0.05; // Example: 5% of vehicle cost

        res.status(200).json({ message: "Insurance quote calculated successfully", insuranceQuote });
    } catch (error) {
        console.error("Error calculating insurance quote:", error);
        res.status(500).json({ message: "Internal server error" });
        
    }
}
export const submitInsuranceFeedback = async (req, res) => {
    try {
        const { driverId, feedback } = req.body;

        // Validate required fields
        if (!driverId || !feedback) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Find the driver record
        const driver = await driverModel.findById(driverId);
        if (!driver) {
            return res.status(404).json({ message: "Driver not found" });
        }

        // Save the feedback (this is a placeholder, implement your feedback saving logic here)
        driver.feedback = feedback;
        await driver.save();

        res.status(200).json({ message: "Insurance feedback submitted successfully", driver });
    } catch (error) {
        console.error("Error submitting insurance feedback:", error);
        res.status(500).json({ message: "Internal server error" });
        
    }
}
export const insuranceAlert= async (req,res)=>{
    try {
        const { driverId, alertType } = req.body;

        // Validate required fields
        if (!driverId || !alertType) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Find the driver record
        const driver = await driverModel.findById(driverId);
        if (!driver) {
            return res.status(404).json({ message: "Driver not found" });
        }

        // Send the alert (this is a placeholder, implement your alert sending logic here)
        driver.alert = alertType;
        await driver.save();

        res.status(200).json({ message: "Insurance alert sent successfully", driver });
    } catch (error) {
        console.error("Error sending insurance alert:", error);
        res.status(500).json({ message: "Internal server error" });
        
    }
}
export const insuranceTest = async (req, res) => {
    try {
        const { driverId, testResult } = req.body;

        // Validate required fields
        if (!driverId || !testResult) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Find the driver record
        const driver = await driverModel.findById(driverId);
        if (!driver) {
            return res.status(404).json({ message: "Driver not found" });
        }

        // Save the test result (this is a placeholder, implement your test result saving logic here)
        driver.insuranceTestResult = testResult;
        await driver.save();

        res.status(200).json({ message: "Insurance test result submitted successfully", driver });
        
    } catch (error) {
        console.error("Error processing insurance test:", error);
        res.status(500).json({ message: "Internal server error" });
        
    }
}
export const insuranceReport = async (req, res) => {
    try {
        const { driverId, reportData } = req.body;

        // Validate required fields
        if (!driverId || !reportData) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Find the driver record
        const driver = await driverModel.findById(driverId);
        if (!driver) {
            return res.status(404).json({ message: "Driver not found" });
        }

        // Save the report data (this is a placeholder, implement your report saving logic here)
        driver.insuranceReport = reportData;
        await driver.save();

        res.status(200).json({ message: "Insurance report submitted successfully", driver });
        
    } catch (error) {
        console.error("Error processing insurance report:", error);
        res.status(500).json({ message: "Internal server error" }); 
        
    }
}
export const weeklyInsuranceReport = async (req, res) => {
    try {
        const { driverId, reportData } = req.body;

        // Validate required fields
        if (!driverId || !reportData) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Find the driver record
        const driver = await driverModel.findById(driverId);
        if (!driver) {
            return res.status(404).json({ message: "Driver not found" });
        }

        // Save the weekly report data (this is a placeholder, implement your report saving logic here)
        driver.weeklyInsuranceReport = reportData;
        await driver.save();

        res.status(200).json({ message: "Weekly insurance report submitted successfully", driver });
        
    } catch (error) {
        console.error("Error processing weekly insurance report:", error);
        res.status(500).json({ message: "Internal server error" });
        
    }

}

