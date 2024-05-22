const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  healthStatus: String,
  allergies: String,
  weight: Number,
  bloodPressure: String,
  bloodSugarLevel: String,
  medications: String,
  insurance: String,
}, { timestamps: true });

module.exports = mongoose.model('Patient', PatientSchema);

