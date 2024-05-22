import React, { useEffect, useState } from 'react';
import { fetchPatients } from '../api';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const getPatients = async () => {
      const { data } = await fetchPatients();
      setPatients(data);
    };
    getPatients();
  }, []);

  return (
    <div>
      <h2>Patient List</h2>
      <ul>
        {patients.map(patient => (
          <li key={patient._id}>
            {patient.name} - {patient.age} - {patient.healthStatus}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
