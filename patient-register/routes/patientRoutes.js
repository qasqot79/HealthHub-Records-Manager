const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

// Get all patients
router.get('/', async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

// Add a new patient
router.post('/', async (req, res) => {
  const newPatient = new Patient(req.body);
  const savedPatient = await newPatient.save();
  res.json(savedPatient);
});

module.exports = router;

