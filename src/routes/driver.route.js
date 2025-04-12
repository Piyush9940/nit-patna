import express ,{Router}  from 'express';
const router = express.Router();

router.post("/profile",profile);
router.get("/liscence",getLicense);
router.post("/liscence",addLicense);
router.post("/chatbot",chatbot);
router.post("/driverFine",driverFine);
router.post("/driverHistory",driverHistory);
router.get("sleep",sleep);
router.post("speedAlert",speed);
router.get("/speed",getSpeed);
router.post("sleepAlert",sleepAlert);
router.post("/payment",payment);

const driver = router;
export default driver;



