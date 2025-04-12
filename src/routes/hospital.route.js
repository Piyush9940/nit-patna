import express from 'express';
import { getNearbyHospitals, getHospitalsFromDB } from '../controllers/hospital.controller.js';
const router = express.Router();
router.get('/hospitals', hospitalController.getHospitalsFromDB);
router.post('/hospitals', hospitalController.getHospitalsFromDB);

const hospital = router;
export default hospital;
// import express from 'express';
