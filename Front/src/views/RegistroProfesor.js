import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistroProfesor = () => {
  const [profesor, setProfesor] = useState({
    nombre_profesor: "",
    apellido_profesor: "",
    tipo_documento_profesor: "",
    dni_profesor: "",
    telefono_profesor: "",
    direccion_profesor: "",
    correo_profesor: "",
    genero_profesor: "",
    nacionalidad_profesor: "",
    edad_profesor: "",
    fecha_nacimiento_profesor: "",
    religion_profesor: "",
    grado_academico_profesor: "",
    certificado_profesor: "",
    cv_profesor: "",
    contrasena_profesor: "",
    repetir_contrasena_profesor: "",
  });

  const [errorMessages, setErrorMessages] = useState({});
  const navigate = useNavigate();

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
      setErrorMessages({ contrasena: "Las contraseñas no coinciden" });
      return;
    }

    // Clear previous error messages
    setErrorMessages({});

    // Make the API call
    // Only include one 'contrasena_profesor' in the data
    axios
      .post("http://localhost:8080/api/profesor/save", {
        ...profesor,
        repetir_contrasena_profesor: undefined, // Exclude the repeated password
      })
      .then((response) => {
        // Handle success
        console.log(response.data);
        // Reset the form or redirect to another page
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
        setErrorMessages(error.response.data.errorMessages);
      });
  };
  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Registro del Profesor</h1>
          <h6>Rellenar todos los campos para un exitoso registro</h6>
          <hr></hr>
          <h6>Informacion del Profesor</h6>
          <div className="mb-3">
            <label htmlFor="nombre_profesor" className="form-label">
              Nombre Completo:
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre_profesor"
              name="nombre_profesor"
              value={profesor.nombre_profesor}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="apellido_profesor" className="form-label">
              Apellido Completo:
            </label>
            <input
              type="text"
              className="form-control"
              id="apellido_profesor"
              name="apellido_profesor"
              value={profesor.apellido_profesor}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tipoDocumentoApoderado" className="form-label">
              Tipo de documento
            </label>
            <select
              className="form-select"
              id="tipo_documento_profesor"
              name="tipo_documento_profesor"
              value={profesor.tipo_documento_profesor}
              onChange={handleChange}
            >
              <option defaultValue>Seleccione una opción</option>
              <option value="DNI">DNI</option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="dni_profesor" className="form-label">
              DNI
            </label>
            <input
              type="text"
              className="form-control"
              id="dni_profesor"
              name="dni_profesor"
              value={profesor.dni_profesor}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="telefono_profesor" className="form-label">
              Teléfono
            </label>
            <input
              type="text"
              className="form-control"
              id="telefono_profesor"
              name="telefono_profesor"
              value={profesor.telefono_profesor}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="direccion_profesor" className="form-label">
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              id="direccion_profesor"
              name="direccion_profesor"
              value={profesor.direccion_profesor}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="correo_profesor" className="form-label">
              Correo
            </label>
            <input
              type="text"
              className="form-control"
              id="correo_profesor"
              name="correo_profesor"
              value={profesor.correo_profesor}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="genero_profesor" className="form-label">
              Género
            </label>
            <input
              type="text"
              className="form-control"
              id="genero_profesor"
              name="genero_profesor"
              value={profesor.genero_profesor}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="nacionalidad_profesor" className="form-label">
              Nacionalidad
            </label>
            <input
              type="text"
              className="form-control"
              id="nacionalidad_profesor"
              name="nacionalidad_profesor"
              value={profesor.nacionalidad_profesor}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="edad_profesor" className="form-label">
              Edad
            </label>
            <input
              type="text"
              className="form-control"
              id="edad_profesor"
              name="edad_profesor"
              value={profesor.edad_profesor}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="fecha_nacimiento_profesor" className="form-label">
              Fecha de Nacimiento
            </label>
            <input
              type="text"
              className="form-control"
              id="fecha_nacimiento_profesor"
              name="fecha_nacimiento_profesor"
              value={profesor.fecha_nacimiento_profesor}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="religion_profesor" className="form-label">
              Religión
            </label>
            <input
              type="text"
              className="form-control"
              id="religion_profesor"
              name="religion_profesor"
              value={profesor.religion_profesor}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="grado_academico_profesor" className="form-label">
              Grado Académico
            </label>
            <input
              type="text"
              className="form-control"
              id="grado_academico_profesor"
              name="grado_academico_profesor"
              value={profesor.grado_academico_profesor}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="certificado_profesor" className="form-label">
              Certificado
            </label>
            <input
              type="text"
              className="form-control"
              id="certificado_profesor"
              name="certificado_profesor"
              value={profesor.certificado_profesor}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="cv_profesor" className="form-label">
              CV
            </label>
            <input
              type="text"
              className="form-control"
              id="cv_profesor"
              name="cv_profesor"
              value={profesor.cv_profesor}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contrasena" className="form-label">
              Contraseña
            </label>
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
            <label htmlFor="repetir_contrasena" className="form-label">
              Repetir Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="repetir_contrasena_profesor"
              name="repetir_contrasena_profesor"
              value={profesor.repetir_contrasena_profesor}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistroProfesor;
