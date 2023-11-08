import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from "axios";
export default function RegistroProfesor() {
  const [formData, setFormData] = useState({
    nombreProfesor: "",
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
        "http://pietrogm.pythonanywhere.com/services/create-profesor/",
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
        <div class="mb-3">
          <label for="nombreProfesor" class="form-label">
            Nombre Completo:
          </label>
          <input
            type="text"
            class="form-control"
            name="nombreProfesor"
            value={formData.nombreProfesor}
            onChange={handleInputChange}
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
            value={formData.apellidoProfesor}
            onChange={handleInputChange}
          />
        </div>
        <div class="mb-3">
          <label for="tipoDocumentoProfesor" class="form-label">
            Tipo de documento
          </label>
          <select
            class="form-select"
            name="tipoDocumentoProfesor"
            value={formData.tipoDocumentoProfesor}
            onChange={handleInputChange}
          >
            <option selected>Seleccione una opción</option>
            <option value="1">DNI</option>
            <option value="3">Pasaporte</option>
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
            value={formData.codigoDocumentoProfesor}
            onChange={handleInputChange}
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
            value={formData.telefonoProfesor}
            onChange={handleInputChange}
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
            value={formData.direccionProfesor}
            onChange={handleInputChange}
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
            value={formData.correoProfesor}
            onChange={handleInputChange}
          />
        </div>
        <div class="mb-3">
          <label for="genero" class="form-label">
            Genero:
          </label>
          <select
            class="form-select"
            name="genero"
            value={formData.genero}
            onChange={handleInputChange}
          >
            <option selected>Seleccione una opción</option>
            <option value="1">Masculino</option>
            <option value="3">Femenino</option>
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
            value={formData.nacionalidad}
            onChange={handleInputChange}
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
            value={formData.edad}
            onChange={handleInputChange}
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
            value={formData.fecha_nacimiento}
            onChange={handleInputChange}
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
            value={formData.religion}
            onChange={handleInputChange}
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
            value={formData.gradoAcademico}
            onChange={handleInputChange}
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
            onChange={handleFileChange}
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
            onChange={handleFileChange}
            name="cv"
          />
        </div>
        <div class="mb-3">
          <label for="contrasenaApoderado" class="form-label">
            Contraseña
          </label>
          <input
            type="password"
            class="form-control"
            name="contrasenaApoderado"
            value={contrasenaApoderado}
            onChange={(e) => setContrasenaApoderado(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="confirmContrasena" class="form-label">
            Repetir Contraseña
          </label>
          <input
            type="password"
            class="form-control"
            name="confirmContrasena"
            value={confirmContrasena}
            onChange={(e) => setConfirmContrasena(e.target.value)}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Guardar la Informacion
        </button>
      </div>
    </form>
  );
}
