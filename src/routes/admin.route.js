import express from "express";
import {
  givepermission,
  getmessage,
  sendmessage,
  fineReport,
  addFineReport,
  fineHistory,
  fileFine,
  liveMonitoring,
  speedMonitoring,
  sleepMonitoring,
  accidentReport,
  potholeReport,
  locationMonitoring,
  incidentReport,
  emergency,
  activeUser
} from "../controller/admin.controller.js";

const router = express.Router();

router.post("/permission", givepermission);
router.get("/message", getmessage);
router.post("/message", sendmessage);

router.post("/fineReport", fineReport);
router.post("/fineReport/add", addFineReport);
router.get("/fineHistory", fineHistory);
router.post("/fileFine", fileFine);

router.get("/liveMonitoring", liveMonitoring);
router.get("/speedMonitoring", speedMonitoring);
router.get("/sleepMonitoring", sleepMonitoring);

router.post("/accidentReport", accidentReport);
router.post("/potholeReport", potholeReport);
router.post("/locationMonitoring", locationMonitoring);
router.post("/incidentReport", incidentReport);

router.get("/emergency", emergency);
router.get("/activeUser", activeUser);

const admin = router;
export default admin;
