import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from "axios";
export default function RegistroProfesor() {
  const [formData, setFormData] = useState({
    nombreprofesor: "",
    apellidoProfesor: "",
    tipoDocumentoProfesor: "",
    codigoDocumentoProfesor: "",
    telefonoProfesor: "",
    direccionProfesor: "",
    correoProfesor: "",
    genero: "",
    nacionalidad: "",
    edad: "",
    fecha_nacimiento: "",
    religion: "",
    gradoAcademico: "",
    documentacion: null,
    cv: null,
  });
  const [contrasenaApoderado, setContrasenaApoderado] = useState("");
  const [confirmContrasena, setConfirmContrasena] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();

    for (const key in formData) {
      formDataToSubmit.append(key, formData[key]);
    }

    formDataToSubmit.append("contrasenaApoderado", contrasenaApoderado);
    formDataToSubmit.append("confirmContrasena", confirmContrasena);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/profesor/save",
        {mode:'cors'},
        formDataToSubmit
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
        <h6>Informacion del Apoderado y familiar</h6>
        <div className="mb-3">
          <label htmlFor="nombreProfesor" className="form-label">
            Nombre Completo:
          </label>
          <input
            type="text"
            className="form-control"
            name="nombreProfesor"
            value={formData.nombre_profesor}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="apellidoProfesor" className="form-label">
            Apellido Completo:
          </label>
          <input
            type="text"
            className="form-control"
            name="apellidoProfesor"
            value={formData.apellidoProfesor}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tipoDocumentoProfesor" className="form-label">
            Tipo de documento
          </label>
          <select
            className="form-select"
            name="tipoDocumentoProfesor"
            value={formData.tipoDocumentoProfesor}
            onChange={handleInputChange}
          >
            <option defaultValue>Seleccione una opción</option>
            <option value="DNI">DNI</option>
            <option value="Pasaporte">Pasaporte</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="codigoDocumentoProfesor" className="form-label">
            Codigo de documento:
          </label>
          <input
            type="number"
            className="form-control"
            name="codigoDocumentoProfesor"
            value={formData.codigoDocumentoProfesor}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefonoProfesor" className="form-label">
            Numero de Telefono
          </label>
          <input
            type="number"
            className="form-control"
            name="telefonoProfesor"
            value={formData.telefonoProfesor}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="direccionProfesor" className="form-label">
            Direccion de Domicilio
          </label>
          <input
            type="text"
            className="form-control"
            name="direccionProfesor"
            value={formData.direccionProfesor}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="correoProfesor" className="form-label">
            Correo Electronico
          </label>
          <input
            type="text"
            className="form-control"
            name="correoProfesor"
            value={formData.correoProfesor}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="genero" className="form-label">
            Genero:
          </label>
          <select
            className="form-select"
            name="genero"
            value={formData.genero}
            onChange={handleInputChange}
          >
            <option defaultValue>Seleccione una opción</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="nacionalidad" className="form-label">
            Nacionalidad
          </label>
          <input
            type="text"
            className="form-control"
            name="nacionalidad"
            value={formData.nacionalidad}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="edad" className="form-label">
            Edad:
          </label>
          <input
            type="number"
            className="form-control"
            name="edad"
            value={formData.edad}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fecha_nacimiento" className="form-label">
            Fecha de Nacimiento:
          </label>
          <input
            type="date"
            className="form-control"
            name="fecha_nacimiento"
            value={formData.fecha_nacimiento}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="religion" className="form-label">
            Religion:
          </label>
          <input
            type="text"
            className="form-control"
            name="religion"
            value={formData.religion}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gradoAcademico" className="form-label">
            Grado Academico Docente:
          </label>
          <input
            type="text"
            className="form-control"
            name="gradoAcademico"
            value={formData.gradoAcademico}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formFileMultiple" className="form-label">
            Documentacion y/o Certificado de estudio
          </label>
          <input
            className="form-control"
            type="file"
            id="formFileMultiple"
            multiple
            onChange={handleFileChange}
            name="documentacion"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formFileMultiple" className="form-label">
            CV
          </label>
          <input
            className="form-control"
            type="file"
            id="formFileMultiple"
            multiple
            onChange={handleFileChange}
            name="cv"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contrasenaApoderado" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            name="contrasenaApoderado"
            value={contrasenaApoderado}
            onChange={(e) => setContrasenaApoderado(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmContrasena" className="form-label">
            Repetir Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            name="confirmContrasena"
            value={confirmContrasena}
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
