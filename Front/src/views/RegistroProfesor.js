// RegistroProfesor.js
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from "axios";

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
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error.response.data);
        // Set error messages from the backend
        setErrorMessages(error.response.data.errorMessages);
      });
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        {/* Other input fields... */}
        <div className="container">
          <h1>Registro del Profesor</h1>
          <h6>Rellenar todos los campos para un exitoso registro</h6>
          <hr></hr>
          <h6>Informacion del Apoderado y familiar</h6>
          <div class="mb-3">
            <label for="nombreProfesor" class="form-label">
              Nombre Completo:
            </label>
            <input
              type="text"
              class="form-control"
              name="nombreProfesor"
              value={profesor.nombre_profesor}
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="apellidoProfesor" class="form-label">
              Apellido Completo:
            </label>
            <input
              type="text"
              class="form-control"
              name="apellidoProfesor"
              value={profesor.apellido_profesor}
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="tipoDocumentoProfesor" class="form-label">
              Tipo de documento
            </label>
            <select
              class="form-select"
              name="tipoDocumentoProfesor"
              value={profesor.tipo_documento_profesor}
              onChange={handleChange}
            >
              <option defaultValue>Seleccione una opción</option>
              <option value="DNI">DNI</option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="codigoDocumentoProfesor" class="form-label">
              Codigo de documento:
            </label>
            <input
              type="number"
              class="form-control"
              name="codigoDocumentoProfesor"
              value={profesor.dni_profesor}
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="telefonoProfesor" class="form-label">
              Numero de Telefono
            </label>
            <input
              type="number"
              class="form-control"
              name="telefonoProfesor"
              value={profesor.telefono_profesor}
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="direccionProfesor" class="form-label">
              Direccion de Domicilio
            </label>
            <input
              type="text"
              class="form-control"
              name="direccionProfesor"
              value={profesor.direccion_profesor}
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="correoProfesor" class="form-label">
              Correo Electronico
            </label>
            <input
              type="text"
              class="form-control"
              name="correoProfesor"
              value={profesor.correo_profesor}
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="genero" class="form-label">
              Genero:
            </label>
            <select
              class="form-select"
              name="genero"
              value={profesor.genero_profesor}
              onChange={handleChange}
            >
              <option defaultValue>Seleccione una opción</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="nacionalidad" class="form-label">
              Nacionalidad
            </label>
            <input
              type="text"
              class="form-control"
              name="nacionalidad"
              value={profesor.nacionalidad_profesor}
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
          <label for="edad" class="form-label">
            Edad:
          </label>
          <input
            type="number"
            class="form-control"
            name="edad"
            value={profesor.edad_profesor}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="fecha_nacimiento" class="form-label">
            Fecha de Nacimiento:
          </label>
          <input
            type="date"
            class="form-control"
            name="fecha_nacimiento"
            value={profesor.fecha_nacimiento_profesor}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="religion" class="form-label">
            Religion:
          </label>
          <input
            type="text"
            class="form-control"
            name="religion"
            value={profesor.religion_profesor}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="gradoAcademico" class="form-label">
            Grado Academico Docente:
          </label>
          <input
            type="text"
            class="form-control"
            name="gradoAcademico"
            value={profesor.grado_academico_profesor}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="formFileMultiple" class="form-label">
            Documentacion y/o Certificado de estudio
          </label>
          <input
            class="form-control"
            type="file"
            id="formFileMultiple"
            multiple
            onChange={handleChange}
            name="documentacion"
          />
        </div>
        <div class="mb-3">
          <label for="formFileMultiple" class="form-label">
            CV
          </label>
          <input
            class="form-control"
            type="file"
            id="formFileMultiple"
            multiple
            onChange={handleChange}
            name="cv"
          />
        </div>
          <div className="mb-3">
            <label htmlFor="contrasena_profesor" className="form-label">
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
            <label htmlFor="repetir_contrasena_profesor" className="form-label">
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
            {errorMessages.contrasena && (
              <div className="text-danger">{errorMessages.contrasena}</div>
            )}
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
