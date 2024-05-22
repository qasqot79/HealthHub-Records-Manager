import React, { useState } from 'react';
import PatientForm from './components/PatientForm';
import PatientList from './components/PatientList';
import Auth from './components/Auth';

const App = () => {
  const [auth, setAuth] = useState(!!localStorage.getItem('token'));

  return (
    <div>
      {auth ? (
        <>
          <PatientForm />
          <PatientList />
        </>
      ) : (
        <Auth setAuth={setAuth} />
      )}
    </div>
  );
};

export default App;
