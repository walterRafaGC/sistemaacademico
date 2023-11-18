// RegistroProfesor.js

import React, { useState } from 'react';
import axios from 'axios';

const RegistroProfesor = () => {
  const [profesor, setProfesor] = useState({
    nombre_profesor: '',
    apellido_profesor: '',
    tipo_documento_profesor: '',
    dni_profesor: '',
    telefono_profesor: '',
    direccion_profesor: '',
    correo_profesor: '',
    genero_profesor: '',
    nacionalidad_profesor: '',
    edad_profesor: '',
    fecha_nacimiento_profesor: '',
    religion_profesor: '',
    grado_academico_profesor: '',
    certificado_profesor: '',
    cv_profesor: '',
    contrasena_profesor: '',
    repetir_contrasena_profesor: '',
  });

  const [errorMessages, setErrorMessages] = useState({});

  const handleChange = (e) => {
    setProfesor({
      ...profesor,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend validation: Check if passwords match
    if (profesor.contrasena_profesor !== profesor.repetir_contrasena_profesor) {
      setErrorMessages({ contrasena: 'Las contraseñas no coinciden' });
      return;
    }

    // Clear previous error messages
    setErrorMessages({});

    // Make the API call
    // Only include one 'contrasena_profesor' in the data
    axios.post('http://localhost:8080/api/profesor/save', {
      ...profesor,
      repetir_contrasena_profesor: undefined, // Exclude the repeated password
    })
      .then((response) => {
        // Handle success
        console.log(response.data);
        // Reset the form or redirect to another page
      })
      .catch((error) => {
        // Handle error
        console.error('Error:', error.response.data);
        // Set error messages from the backend
        setErrorMessages(error.response.data.errorMessages);
      });
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        {/* Other input fields... */}

        <div className="mb-3">
          <label htmlFor="contrasena_profesor" className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="contrasena_profesor"
            name="contrasena_profesor"
            value={profesor.contrasena_profesor}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="repetir_contrasena_profesor" className="form-label">Repetir Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="repetir_contrasena_profesor"
            name="repetir_contrasena_profesor"
            value={profesor.repetir_contrasena_profesor}
            onChange={handleChange}
          />
          {errorMessages.contrasena && (
            <div className="text-danger">{errorMessages.contrasena}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">Registrar</button>
      </form>
    </div>
  );
};

export default RegistroProfesor;