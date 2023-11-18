import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import SlidingMenu from "./SlidingMenu";

export default function RegistroAdministracion() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombrePersonalAdministrativo: "",
    apellidoPersonalAdministrativo: "",
    fechaNacimientoPersonalAdministrativo: "",
    genero: "",
    tipoDocumentoPersonalAdministrativo: "",
    codigoDocumentoPersonalAdministrativo: "",
    direccionPersonalAdministrativo: "",
    telefonoPersonalAdministrativo: "",
    correoPersonalAdministrativo: "",
    cargoPersonalAdministrativo: "",
    fechaInicioPersonalAdministrativo: "",
    departamentoAdministrativo: "",
    salarioPersonalAdministrativo: "",
    contratoPersonalAdministrativo: "",
    horarioPersonalAdministrativo: "",
  });

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

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
      const response = await axios.post(
        "http://localhost:3000/api/personalAdministrativo/save",
        formData
      );

      // Handle the response as needed
      console.log("Response from API:", response.data);

      // Optionally, you can reset the form after successful submission
      setFormData({
        nombrePersonalAdministrativo: "",
        apellidoPersonalAdministrativo: "",
        fechaNacimientoPersonalAdministrativo: "",
        genero: "",
        tipoDocumentoPersonalAdministrativo: "",
        codigoDocumentoPersonalAdministrativo: "",
        direccionPersonalAdministrativo: "",
        telefonoPersonalAdministrativo: "",
        correoPersonalAdministrativo: "",
        cargoPersonalAdministrativo: "",
        fechaInicioPersonalAdministrativo: "",
        departamentoAdministrativo: "",
        salarioPersonalAdministrativo: "",
        contratoPersonalAdministrativo: "",
        horarioPersonalAdministrativo: "",
      });
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div>
      <button onClick={toggleMenu} className="btn btn-secondary">
        {isMenuOpen ? "Close Menu" : "Open Menu"}
      </button>
      {isMenuOpen && <SlidingMenu onClose={toggleMenu} />}
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Registro de Trabajadores de la Institucion</h1>
          <h6>Rellenar todos los campos para un exitoso registro</h6>
          <div className="mb-3">
            <label
              htmlFor="nombrePersonalAdministrativo"
              className="form-label"
            >
              Nombre Completo:
            </label>
            <input
              type="text"
              className="form-control"
              name="nombrePersonalAdmninitrativo"
              onChange={handleChange}
              value={formData.nombrePersonalAdministrativo}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="apellidoPersonalAdministrativo"
              className="form-label"
            >
              Apellido Completo:
            </label>
            <input
              type="text"
              className="form-control"
              name="apellidoPersonalAdministrativo"
              onChange={handleChange}
              value={formData.apellidoPersonalAdministrativo}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="fechaNacimientoPersonalAdministrativo"
              className="form-label"
            >
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              className="form-control"
              name="fechaNacimientoPersonalAdministrativo"
              onChange={handleChange}
              value={formData.fechaNacimientoPersonalAdministrativo}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="genero" className="form-label">
              Genero
            </label>
            <select className="form-select" name="genero" onChange={handleChange}
              value={formData.genero}>
              <option defaultValue>Seleccione una opción</option>
              <option value="Femenino">Femenino</option>
              <option value="Masculino">Masculino</option>
            </select>
          </div>
          <div className="mb-3">
            <label
              htmlFor="tipoDocumentoPersonalAdministrativo"
              className="form-label"
            >
              Tipo de documento
            </label>
            <select
              className="form-select"
              name="tipoDocumentoPersonalAdministrativo"
              onChange={handleChange}
              value={formData.tipoDocumentoPersonalAdministrativo}
            >
              <option defaultValue>Seleccione una opción</option>
              <option value="DNI">DNI</option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
          </div>
          <div className="mb-3">
            <label
              htmlFor="codigoDocumentoPersonalAdministrativo"
              className="form-label"
            >
              Codigo de documento:
            </label>
            <input
              type="number"
              className="form-control"
              name="codigoDocumentoPersonalAdministrativo"
              onChange={handleChange}
              value={formData.codigoDocumentoPersonalAdministrativo}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="fotoPersonalAdministrativo" className="form-label">
              Fotografia
            </label>
            <input
              className="form-control"
              type="file"
              id="formFileMultiple"
              multiple
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="direccionPersonalAdministrativo"
              className="form-label"
            >
              Direccion de Domicilio
            </label>
            <input
              type="text"
              className="form-control"
              name="direccionPersonalAdministrativo"
              onChange={handleChange}
              value={formData.direccionPersonalAdministrativo}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="telefonoPersonalAdministrativo"
              className="form-label"
            >
              Numero de Telefono
            </label>
            <input
              type="number"
              className="form-control"
              name="telefonoPersonalAdministrativo"
              onChange={handleChange}
              value={formData.telefonoPersonalAdministrativo}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="correoPersonalAdministrativo"
              className="form-label"
            >
              Correo Electronico
            </label>
            <input
              type="text"
              className="form-control"
              name="correoPersonalAdministrativo"
              onChange={handleChange}
              value={formData.correoPersonalAdministrativo}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="cargoPersonalAdministrativo "
              className="form-label"
            >
              Puesto o Cargo
            </label>
            <select className="form-select" name="cargoPersonalAdministrativo" onChange={handleChange}
              value={formData.cargoPersonalAdministrativo}>
              <option defaultValue>Seleccione una opción</option>
              <option value="Supervisor">Supervisor</option>
              <option value="Coordinador">Coordinador</option>
              <option value="Director">Director</option>
              <option value="Sub-director">Sub-director</option>
            </select>
          </div>
          <div className="mb-3">
            <label
              htmlFor="fechaInicioPersonalAdministrativo"
              className="form-label"
            >
              Fecha de Inicio de Empleo
            </label>
            <input
              type="date"
              className="form-control"
              name="fechaInicioPersonalAdministrativo"
              onChange={handleChange}
              value={formData.fechaInicioPersonalAdministrativo}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="departamentoAdministrativo" className="form-label">
              Departamento o Area
            </label>
            <input
              type="text"
              className="form-control"
              name="departamentoAdministrativo"
              onChange={handleChange}
              value={formData.departamentoAdministrativo}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="salarioPersonalAdministrativo"
              className="form-label"
            >
              Salario
            </label>
            <input
              type="number"
              className="form-control"
              name="salarioPersonalAdministrativo"
              onChange={handleChange}
              value={formData.salarioPersonalAdministrativo}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="contratoPersonalAdministrativo"
              className="form-label"
            >
              Tipo de Contrato
            </label>
            <select
              className="form-select"
              name="contratoPersonalAdministrativo" onChange={handleChange}
              value={formData.contratoPersonalAdministrativo}
            >
              <option defaultValue>Seleccione una opción</option>
              <option value="Tiempo Completo">Tiempo Completo</option>
              <option value="Medio Tiempo">Medio Tiempo</option>
            </select>
          </div>
          <div className="mb-3">
            <label
              htmlFor="documentoPersonalAdministrativo"
              className="form-label"
            >
              Contrato Laboral
            </label>
            <input
              className="form-control"
              type="file"
              id="formFileMultiple"
              multiple
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="horarioPersonalAdministrativo"
              className="form-label"
            >
              Horario de Trabajo
            </label>
            <input
              type="text"
              className="form-control"
              name="horarioPersonalAdministrativo"
              onChange={handleChange}
              value={formData.horarioPersonalAdministrativo}
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
