import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";


export default function RegistroProfesor() {
  const cachedFormData = JSON.parse(localStorage.getItem("formData")) || {
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
  };

  const [formData, setFormData] = useState(cachedFormData);

  const [contrasena_profesor, setContrasenaProfesor] = useState(""); // Changed from "contrasenaApoderado"
  const [confirm_contrasena, setConfirmContrasena] = useState("");

  useEffect(() => {
    // Cache form data in localStorage whenever it changes
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    
    // Check if passwords match
    if (contrasena_profesor !== confirm_contrasena) {
      console.error("Las contraseñas no coinciden.");
      // Handle error (display message, prevent submission, etc.)
      return;
    }

    const formDataToSubmit = new FormData();

    // Append attributes
    for (const [key, value] of Object.entries(formData)) {
      formDataToSubmit.set(key, value);
    }

    formDataToSubmit.set("contrasena_profesor", contrasena_profesor);
    console.log("FormData to submit:", formDataToSubmit);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/profesor/save",
        formDataToSubmit,
        { mode: 'cors' }
      );
      console.log("Respuesta del servidor:", response.data);
      // Aquí puedes manejar la respuesta del servidor o redirigir a otra página
    } catch (error) {
      console.error("Error al enviar datos al servidor:", error);
      // Aquí puedes manejar errores
    }
  };

  return (
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
            name="nombre_profesor"
            value={formData.nombre_profesor}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="apellido_profesor" className="form-label">
            Apellido Completo:
          </label>
          <input
            type="text"
            className="form-control"
            name="apellido_profesor"
            value={formData.apellido_profesor}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tipo_documento_profesor" className="form-label">
            Tipo de documento
          </label>
          <select
            className="form-select"
            name="tipo_documento_profesor"
            value={formData.tipo_documento_profesor}
            onChange={handleInputChange}
          >
            <option defaultValue>Seleccione una opción</option>
            <option value="DNI">DNI</option>
            <option value="Pasaporte">Pasaporte</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="dni_profesor" className="form-label">
            Codigo de documento:
          </label>
          <input
            type="number"
            className="form-control"
            name="dni_profesor"
            value={formData.dni_profesor}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono_profesor" className="form-label">
            Numero de Telefono
          </label>
          <input
            type="number"
            className="form-control"
            name="telefono_profesor"
            value={formData.telefono_profesor}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="direccion_profesor" className="form-label">
            Direccion de Domicilio
          </label>
          <input
            type="text"
            className="form-control"
            name="direccion_profesor"
            value={formData.direccion_profesor}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="correo_profesor" className="form-label">
            Correo Electronico
          </label>
          <input
            type="text"
            className="form-control"
            name="correo_profesor"
            value={formData.correo_profesor}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="genero_profesor" className="form-label">
            Genero:
          </label>
          <select
            className="form-select"
            name="genero_profesor"
            value={formData.genero_profesor}
            onChange={handleInputChange}
          >
            <option defaultValue>Seleccione una opción</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="nacionalidad_profesor" className="form-label">
            Nacionalidad
          </label>
          <input
            type="text"
            className="form-control"
            name="nacionalidad_profesor"
            value={formData.nacionalidad_profesor}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="edad_profesor" className="form-label">
            Edad:
          </label>
          <input
            type="number"
            className="form-control"
            name="edad_profesor"
            value={formData.edad_profesor}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fecha_nacimiento_profesor" className="form-label">
            Fecha de Nacimiento:
          </label>
          <input
            type="date"
            className="form-control"
            name="fecha_nacimiento_profesor"
            value={formData.fecha_nacimiento_profesor}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="religion_profesor" className="form-label">
            Religion:
          </label>
          <input
            type="text"
            className="form-control"
            name="religion_profesor"
            value={formData.religion_profesor}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="grado_academico_profesor" className="form-label">
            Grado Academico Docente:
          </label>
          <input
            type="text"
            className="form-control"
            name="grado_academico_profesor"
            value={formData.grado_academico_profesor}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="certificado_profesor" className="form-label">
            Certificado de estudio:
          </label>
          <input
            className="form-control"
            type="text"
            id="certificado_profesor"
            name="certificado_profesor"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cv_profesor" className="form-label">
            CV:
          </label>
          <input
            className="form-control"
            type="text"
            id="cv_profesor"
            name="cv_profesor"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contrasena_profesor" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            name="contrasena_profesor"
            value={contrasena_profesor}
            onChange={(e) => setContrasenaProfesor(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirm_contrasena" className="form-label">
            Repetir Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            name="confirm_contrasena"
            value={confirm_contrasena}
            onChange={(e) => setConfirmContrasena(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar la Informacion
        </button>
      </div>
    </form>
  );
}