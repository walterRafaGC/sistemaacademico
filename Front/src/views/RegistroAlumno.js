import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import SlidingMenu from "./sidebar";
import { useNavigate } from 'react-router-dom';
import "../css/margen-alumno.css";

const RegistroAlumno = () => {
  const [alumno, setAlumno] = useState({
    nombre_alumno: "",
    apellido_alumno: "",
    tipo_documento_alumno: "",
    numero_documento_alumno: "",
    codigo_alumno: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setAlumno({
      ...alumno,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
    .post("http://localhost:8080/api/alumno/save",{
      ...alumno,
    })
    .then((response) =>{
      console.log(response.data);
      navigate("/menu");
    })
    .catch((error)=>{
      console.error("Error:", error.response.data);
    });
  };

  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-3">
        <SlidingMenu />
      </div>
      <div className="col-md-9">
      <form onSubmit={handleSubmit} className="custom-form3">
        <div className="container">
          <h1>Registro del Alumno</h1>
          <h6>Rellenar todos los campos para un exitoso registro</h6>
          <div className="mb-3">
            <label htmlFor="nombreAlumno" className="form-label">
              Nombre Completo del Alumno:
            </label>
            <input type="text" className="form-control" name="nombre_alumno" value={alumno.nombre_alumno}
              onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="apellidoAlumno" className="form-label">
              Apellido Completo del Alumno:
            </label>
            <input type="text" className="form-control" name="apellido_alumno" value={alumno.apellido_alumno}
              onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="tipoDocumentoAlumno" className="form-label">
              Tipo de documento
            </label>
            <select className="form-select" name="tipo_documento_alumno" value={alumno.tipo_documento_alumno}
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
              name="numero_documento_alumno"
              value={alumno.numero_documento_alumno}
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
              name="codigo_alumno"
              value={alumno.codigo_alumno}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary" >
            Guardar la Informacion
          </button>
        </div>
      </form>
      </div>
    </div>
    </div>
  );
};

export default RegistroAlumno;
