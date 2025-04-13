import express from "express";
import { traffic, publicTransport, trafficAlerts } from "../controller/traffic.controller.js";
const router = express.Router();
router.get("/traffic", traffic);
router.post("/publicTransport", publicTransport);
router.post("/trafficAlerts", trafficAlerts);

const traffic = router;
export default traffic;