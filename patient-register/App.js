import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList, Alert } from 'react-native';
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

const App = () => {
  const [formData, setFormData] = useState({});
  const [patients, setPatients] = useState([]);
  const [auth, setAuth] = useState(false);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      await API.post('/patients', formData);
      Alert.alert('Patient registered successfully');
    } catch (error) {
      console.error(error);
      Alert.alert('Failed to register patient');
    }
  };

  const fetchPatients = async () => {
    const { data } = await API.get('/patients');
    setPatients(data);
  };

  return (
    <View>
      {auth ? (
        <>
          <TextInput placeholder="Name" onChangeText={(value) => handleChange('name', value)} />
          <TextInput placeholder="Age" onChangeText={(value) => handleChange('age', value)} />
          <TextInput placeholder="Health Status" onChangeText={(value) => handleChange('healthStatus', value)} />
          <TextInput placeholder="Allergies" onChangeText={(value) => handleChange('allergies', value)} />
          <TextInput placeholder="Weight" onChangeText={(value) => handleChange('weight', value)} />
          <TextInput placeholder="Blood Pressure" onChangeText={(value) => handleChange('bloodPressure', value)} />
          <TextInput placeholder="Blood Sugar Level" onChangeText={(value) => handleChange('bloodSugarLevel', value)} />
          <TextInput placeholder="Medications" onChangeText={(value) => handleChange('medications', value)} />
          <TextInput placeholder="Insurance" onChangeText={(value) => handleChange('insurance', value)} />
          <Button title="Register Patient" onPress={handleSubmit} />
          <Button title="Fetch Patients" onPress={fetchPatients} />
          <FlatList
            data={patients}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => <Text>{item.name} - {item.age} - {item.healthStatus}</Text>}
          />
        </>
      ) : (
        <Button title="Login" onPress={() => setAuth(true)} />
      )}
    </View>
  );
};

export default App;
