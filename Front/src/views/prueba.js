
import React, { useState } from 'react';
import formularioLogin from './formulario_login.json';
const styles = {
    container: {
      width: '300px',
      margin: 'auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    inputGroup: {
      marginBottom: '15px',
    },
    label: {
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    input: {
      padding: '8px',
      border: '1px solid #ccc',
      borderRadius: '3px',
    },
    submitButton: {
      padding: '10px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
    },
  };
  
const LoginForm = () => {
  const [credenciales, setCredenciales] = useState({
    nombre_usuario: '',
    contrasena: ''
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setCredenciales({ ...credenciales, [id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar la lógica para manejar el envío del formulario (por ejemplo, enviar los datos al backend)
    console.log('Datos de inicio de sesión:', credenciales);
  };

  return (
    <div style={styles.container}>
      <h2>Inicio de Sesión</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        {formularioLogin.campos.map((campo) => (
          <div key={campo.id} style={styles.inputGroup}>
            <label style={styles.label} htmlFor={campo.id}>{campo.label}</label>
            <input
              style={styles.input}
              type={campo.tipo}
              id={campo.id}
              placeholder={campo.placeholder}
              value={credenciales[campo.id]}
              onChange={handleInputChange}
            />
          </div>
        ))}
        <button type="submit" style={styles.submitButton}>
          {formularioLogin.boton_submit}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;