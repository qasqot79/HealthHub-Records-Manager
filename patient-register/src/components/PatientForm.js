import React, { useState } from 'react';
import { createPatient } from '../api';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: '', age: '', healthStatus: '', allergies: '',
    weight: '', bloodPressure: '', bloodSugarLevel: '',
    medications: '', insurance: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPatient(formData);
      alert('Patient registered successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to register patient');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
      <input type="text" name="healthStatus" placeholder="Health Status" onChange={handleChange} required />
      <input type="text" name="allergies" placeholder="Allergies" onChange={handleChange} required />
      <input type="number" name="weight" placeholder="Weight" onChange={handleChange} required />
      <input type="text" name="bloodPressure" placeholder="Blood Pressure" onChange={handleChange} required />
      <input type="text" name="bloodSugarLevel" placeholder="Blood Sugar Level" onChange={handleChange} required />
      <input type="text" name="medications" placeholder="Medications" onChange={handleChange} required />
      <input type="text" name="insurance" placeholder="Insurance" onChange={handleChange} required />
      <button type="submit">Register Patient</button>
    </form>
  );
};

export default PatientForm;
