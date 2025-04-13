import express from 'express';
import {
  getNearbyHospitals,
  getHospitalsFromDB,
  getHospitalById,
  getHospitalByName,
  getHospitalByQrCode,
  getHospitalByLocation,
  updateHospital
} from '../controllers/hospital.controller.js'; // make sure the path is correct

const router = express.Router();

// Fetch and save nearby hospitals using lat/lng
router.post('/nearby', getNearbyHospitals);

// Get all hospitals from the database
router.get('/', getHospitalsFromDB);

// Get hospital by ID
router.get('/id/:id', getHospitalById);

// Get hospital by name (partial match)
router.get('/name/:name', getHospitalByName);

// Get hospital by QR code (partial match)
router.get('/qr/:qrCode', getHospitalByQrCode);

// Get hospital by geolocation (within 5 miles radius)
router.get('/location/:lat/:lng', getHospitalByLocation);

// Update hospital details
router.put('/update/:id', updateHospital);

export default router;
