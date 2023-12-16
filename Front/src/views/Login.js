import "../css/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  container: {
    width: "600px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  submitButton: {
    padding: "9px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  },
};
//Estado para los datos de inicio de sesión
const LoginForm = () => {
  const [credenciales, setCredenciales] = useState({
    dni: "",
    contrasena: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setCredenciales({ ...credenciales, [id]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        dni: credenciales.dni,
        contrasena: credenciales.contrasena,
      });

      if (response.status === 200) {
        // Assuming the server sends back a success status
        // You may need to adjust this based on your actual server response
        navigate("/menu"); // Redirect to the dashboard or any desired route
      } else {
        console.error("Contraseña incorrecta");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
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
                  id="dni"
                  type="text"
                  className="form-control"
                  name="dni"
                  placeholder="DNI"
                  value={credenciales.dni}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  style={styles.input}
                  id="contrasena"
                  type="password"
                  className="form-control"
                  name="contrasena"
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
              <a
                href="http://localhost:3000/cambiarContrasena"
                to="/cambiarContraseña"
                className="d-block text-center mt-3"
              >
                Cambiar Contraseña
              </a>
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
                <button onClick={() => navigate("/registroApoderado")}></button>
              </h6>
              <h6>
                - Si eres un profesor{" "}
                <button onClick={() => navigate("/registroProfesor")}></button>
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
