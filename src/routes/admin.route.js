import express ,{Router}  from 'express';
const router = express.Router();




router.post("permission",givepermission);
router.get("/message",getmessage);
router.post("/message",sendmessage);
router.post("/fineReport",fineReport);
router.post("/fineReport/add",addFineReport);
router.get("fineHistory",fineHistory);
router.post("fileFine",fileFine);
router.get("/liveMonitering",liveMonitoring);
router.get("speedMointering",speedMonitoring);
router.get("/sleepMonitoring",sleepMonitoring);
router.post("/accidentReport",accidentReport);
router.post("potholeReport",potholeReport);
router.post("locationMonitering",locationMonitoring);
router.post("incidentReport",incidentReport);
router.fetch("/emergency",emergency);
router.fetch("/activeuser",activeUser);

const admin = router;
export default admin;



