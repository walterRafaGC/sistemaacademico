import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
const ApiConsumer = () => {
  const [formData, setFormData] = useState({
    nombreAlumno: "",
    apellidoAlumno: "",
    tipoDocumentoAlumno: "",
    codigoDocumentoAlumno: "",
    codigoEstudianteAlumno: "",
  });

const [loading, setLoading] = useState(false);

useEffect(() => {
  // Fetch data if needed
  // axios.get("URL")
  //   .then((response) => {
  //     setData(response.data);
  //     setLoading(false);
  //   })
  //   .catch((error) => {
  //     console.log("Fallo en la conección de la API", error);
  //     setLoading(false);
  //   });
}, []); // Add dependencies if needed

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);
    // Replace "API_ENDPOINT" with the actual endpoint for data registration
    const response = await axios.post("API_ENDPOINT", formData);
    console.log("Data successfully submitted:", response.data);
    // Optionally, you can reset the form after successful submission
    setFormData({
      nombreAlumno: "",
      apellidoAlumno: "",
      tipoDocumentoAlumno: "",
      codigoDocumentoAlumno: "",
      codigoEstudianteAlumno: "",
    });
  } catch (error) {
    console.error("Error submitting data:", error);
  } finally {
    setLoading(false);
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h1>Registro del Alumno</h1>
        <h6>Rellenar todos los campos para un exitoso registro</h6>
        <div className="mb-3">
          <label htmlFor="nombreAlumno" className="form-label">
            Nombre Completo del Alumno:
          </label>
          <input type="text" className="form-control" name="nombreAlumno" value={formData.nombreAlumno}
            onChange={handleInputChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="apellidoAlumno" className="form-label">
            Apellido Completo del Alumno:
          </label>
          <input type="text" className="form-control" name="apellidoAlumno" value={formData.apellidoAlumno}
          onChange={handleInputChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="tipoDocumentoAlumno" className="form-label">
            Tipo de documento
          </label>
          <select className="form-select" name="tipoDocumentoAlumno" value={formData.tipoDocumentoAlumno}
            onChange={handleInputChange}>
            <option defaultValue value="" disabled>Seleccione una opción</option>
            <option value="DNI">DNI</option>
            <option value="Pasaporte">Pasaporte</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="codigoDocumentoAlumno" className="form-label">
            Codigo de documento:
          </label>
          <input
            type="number"
            className="form-control"
            name="codigoDocumentoAlumno" value={formData.codigoDocumentoAlumno} onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="codigoEstudianteAlumno" className="form-label">
            Codigo de Estudiante(PUM):
          </label>
          <input
            type="number"
            className="form-control"
            name="codigoEstudianteAlumno" value={formData.codigoEstudianteAlumno} onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar la Informacion
        </button>
      </div>
    </form>
  );
};

export default ApiConsumer;
