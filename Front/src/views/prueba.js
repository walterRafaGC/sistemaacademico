import React, { useState } from 'react';
import axios from 'axios';

const Prueba = () => {
  const [dni, setDni] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        dni: parseInt(dni),  // Assuming dni is a number
        contrasena: contrasena,
      });

      console.log('Login response:', response.data);

      // Handle the response accordingly
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  return (
    <div>
      <h1>Login Form</h1>
      <label>
        DNI:
        <input type="text" value={dni} onChange={(e) => setDni(e.target.value)} />
      </label>
      <br />
      <label>
        Contraseña:
        <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Prueba;