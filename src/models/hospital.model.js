
import mongoose from 'mongoose';
// Hospital model for storing hospital information

const hospitalSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  place_id: String,
  rating: Number,
  email: String,
  website: String,
  location: {
    lat: Number,
    lng: Number
  }
});

module.exports = mongoose.model('Hospital', hospitalSchema);
