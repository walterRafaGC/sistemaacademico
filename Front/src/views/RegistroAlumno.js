import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import SlidingMenu from "./SlidingMenu";

export default function RegistroAlumno() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombreAlumn: "",
    apellidoAlumno: "",
    tipoDocumentoAlumno: "",
    codigoDocumentoAlumno: "",
    codigoEstudianteAlumno: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your API endpoint
      const response = await axios.post("http://localhost:3000/api/alumno/save", formData);

      // Handle the response as needed
      console.log("Response from API:", response.data);

      // Optionally, you can reset the form after successful submission
      setFormData({
        nombreAlumn: "",
        apellidoAlumno: "",
        tipoDocumentoAlumno: "",
        codigoDocumentoAlumno: "",
        codigoEstudianteAlumno: "",
      });
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu} className="btn btn-secondary">
        {isMenuOpen ? "Close Menu" : "Open Menu"}
      </button>
      {isMenuOpen && <SlidingMenu onClose={toggleMenu} />}
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Registro del Alumno</h1>
          <h6>Rellenar todos los campos para un exitoso registro</h6>
          <div className="mb-3">
            <label htmlFor="nombreAlumno" className="form-label">
              Nombre Completo del Alumno:
            </label>
            <input type="text" className="form-control" name="nombreAlumn" value={formData.nombreAlumn}
              onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="apellidoAlumno" className="form-label">
              Apellido Completo del Alumno:
            </label>
            <input type="text" className="form-control" name="apellidoAlumno" value={formData.apellidoAlumno}
              onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="tipoDocumentoAlumno" className="form-label">
              Tipo de documento
            </label>
            <select className="form-select" name="tipoDocumentoAlumno" value={formData.tipoDocumentoAlumno}
              onChange={handleChange}>
              <option defaultValue value="" disabled>
                Seleccione una opción
              </option>
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
              name="codigoDocumentoAlumno"
              value={formData.codigoDocumentoAlumno}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="codigoEstudianteAlumno" className="form-label">
              Codigo de Estudiante(PUM):
            </label>
            <input
              type="number"
              className="form-control"
              name="codigoEstudianteAlumno"
              value={formData.codigoEstudianteAlumno}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Guardar la Informacion
          </button>
        </div>
      </form>
    </div>
  );
}
