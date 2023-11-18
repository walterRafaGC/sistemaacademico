import "../css/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const styles = {
  container: {
    width: "600px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  input: {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "3px",
  },
  submitButton: {
    padding: '60px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
};

const LoginForm = () => {
  const [credenciales, setCredenciales] = useState({
    nombre_usuario: "",
    contrasena: "",
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setCredenciales({ ...credenciales, [id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar la lógica para manejar el envío del formulario (por ejemplo, enviar los datos al backend)
    console.log("Datos de inicio de sesión:", credenciales);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={styles.container}>
        <div className="container mt-5">
          <h2 className="text-center">- Inicia Sesión -</h2>
          <p className="text-center">
            Puedes hacer todo lo que necesitas en tu vida escolar. Revisa tus
            horarios, notas, eventos, trámites y más.
          </p>
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="input-group mb-3">
                <input
                  style={styles.input}
                  id="txtUser"
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="DNI"
                  value={credenciales.nombre_usuario}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  style={styles.input}
                  id="txtPassword"
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Contraseña"
                  value={credenciales.contrasena}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label">Recordarme</label>
              </div>
              <button
                style={styles.submitButton}
                className="btn btn-primary btn-block"
                type="submit"
                onClick={() =>
                  (window.location.href = "http://localhost:3000/menu")
                }
              >
                Ingresar
              </button>
              <p className="mt-3">
                No tienes una cuenta, entonces
                <button
                  type="button"
                  className="btn btn-link"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Registrate
                </button>
              </p>
              <Link
                to="/cambiarContraseña"
                className="d-block text-center mt-3"
              >
                Cambiar Contraseña
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Registro
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h6>
                - Si eres un apoderado{" "}
                <Link to="/registroApoderado">Selecciona Aquí</Link>
              </h6>
              <h6>
                - Si eres un profesor
                <Link to="/registroProfesor">Selecciona Aquí</Link>
              </h6>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
