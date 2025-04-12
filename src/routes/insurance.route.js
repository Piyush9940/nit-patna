import express ,{ Router } from "express";

const router = express.Router();
router.get("/insuranceDetails", getInsuranceDetails);
router.post("/insuranceClaim", submitInsuranceClaim);
router.post("/insuranceTest",insuranceTest) ;
router.post("insurancereport",insuranceReport) ;
router.post("/insuranceClaimStatus", getInsuranceClaimStatus);
router.fetch("/insuranceHistory", getInsuranceHistory);
router.post("/insuranceRenewal", renewInsurance);
router.post("/insurancePayment", processInsurancePayment);
router.post("/insuranceQuote", getInsuranceQuote);
router.post("/insuranceFeedback", submitInsuranceFeedback);
router.post("weeklyInsuranceReport", weeklyInsuranceReport);
router.post("/insuranceAlert", insuranceAlert);

const insurance = router;
export default insurance;


