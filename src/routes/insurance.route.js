import express, { Router } from "express";
import { getInsuranceDetails, submitInsuranceClaim, insuranceTest, insuranceReport, getInsuranceClaimStatus, getInsuranceHistory, renewInsurance, processInsurancePayment, getInsuranceQuote, submitInsuranceFeedback, weeklyInsuranceReport, insuranceAlert } from "../controller/insurance.controller.js";

const router = express.Router();
router.get("/insuranceDetails", getInsuranceDetails);
router.post("/insuranceClaim", submitInsuranceClaim);
router.post("/insuranceTest", insuranceTest);
router.post("/insuranceReport", insuranceReport);
router.post("/insuranceClaimStatus", getInsuranceClaimStatus);
router.get("/insuranceHistory", getInsuranceHistory);  // Use GET for fetching history
router.post("/insuranceRenewal", renewInsurance);
router.post("/insurancePayment", processInsurancePayment);
router.post("/insuranceQuote", getInsuranceQuote);
router.post("/insuranceFeedback", submitInsuranceFeedback);
router.post("/weeklyInsuranceReport", weeklyInsuranceReport);
router.post("/insuranceAlert", insuranceAlert);

const insurance = router;
export default insurance;
