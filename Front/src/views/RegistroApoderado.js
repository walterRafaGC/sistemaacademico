import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from "axios";

const RegistroApoderado = () => {
  const [apoderado, setApoderado] = useState({
    nombre_apoderado: "",
    apellido_apoderado: "",
    tipo_documento_apoderado: "",
    dni_apoderado: "",
    telefono_apoderado: "",
    direccion_apoderado: "",
    correo_apoderado: "",
    diferentePadres: false,
    contrasena:"",
    repetir_contrasena_apoderado:"",
    id_hijo_apoderado:"",
  });

  const [padre, setPadre] = useState({
    nombrePadre: "",
    tipoDocumentoPadre: "",
    codigoDocumentoPadre: "",
    telefonoPadre: "",
    correoPadre: "",
    nombreMadre: "",
    tipoDocumentoMadre: "",
    codigoDocumentoMadre: "",
    telefonoMadre: "",
    correoMadre: "",
  });

  

  const [errorMessages, setErrorMessages] = useState({});

  const handleChange = (e) => {
    setApoderado({
      ...apoderado,
      [e.target.name]: e.target.value,
    });
    setAlumno({
      ...alumno,
      [e.target.name]: e.target.value,
    })
  };

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    // Check which part of the form is being updated
    if (name in apoderado) {
      setApoderado({
        ...apoderado,
        [name]: name === "diferentePadres" ? checked : value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (apoderado.contrasena !== apoderado.repetir_contrasena_apoderado) {
      setErrorMessages({ contrasena: "Las contraseñas no coinciden" });
      return;
    }

    setErrorMessages({});

    axios
    .post("http://localhost:8080/api/apoderado/save",{
      ...apoderado,
      repetir_contrasena_apoderado: undefined,
    })
    .then((response)=>{
      console.log(response.data);
    })
    .catch((error)=>{
      console.error("Error:", error.response.data);
      setErrorMessages(error.response.data.errorMessages);
    })
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Registro del Apoderado</h1>
          <h6>Rellenar todos los campos para un exitoso registro</h6>
          <hr></hr>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck1"
              name="diferentePadres"
              checked={apoderado.diferentePadres}
              onChange={handleInputChange}
            />
            <label className="form-check-label" htmlFor="gridCheck1">
              El apoderado es diferente a los padres
            </label>
          </div>
          <br />
          <h6>Informacion del Apoderado</h6>
          <div>
            <div className="mb-3">
              <label htmlFor="nombreApoderado" className="form-label">
                Nombre Completo del Apoderado:
              </label>
              <input
                type="text"
                className="form-control"
                name="nombreApoderado"
                value={apoderado.nombre_apoderado}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="apellidoApoderado" className="form-label">
                Apellido Completo del Apoderado:
              </label>
              <input
                type="text"
                className="form-control"
                name="apellidoApoderado"
                value={apoderado.apellido_apoderado}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tipoDocumentoApoderado" className="form-label">
                Tipo de documento
              </label>
              <select className="form-select" name="tipoDocumentoApoderado"
              value={apoderado.tipo_documento_apoderado} onChange={handleChange}>
                <option defaultValue>Seleccione una opción</option>
                <option value="DNI">DNI</option>
                <option value="Pasaporte">Pasaporte</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="codigoDocumentoApoderado" className="form-label">
                Codigo de documento:
              </label>
              <input
                type="number"
                className="form-control"
                name="codigoDocumentoApoderado"
                value={apoderado.dni_apoderado}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefonoApoderado" className="form-label">
                Numero de Telefono
              </label>
              <input
                type="number"
                className="form-control"
                name="telefonoApoderado"
                value={apoderado.telefono_apoderado}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="direccionApoderado" className="form-label">
                Direccion de Domicilio
              </label>
              <input
                type="text"
                className="form-control"
                name="direccionApoderado"
                value={apoderado.direccion_apoderado}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="correoApoderado" className="form-label">
                Correo Electronico
              </label>
              <input
                type="text"
                className="form-control"
                name="correoApoderado"
                value={apoderado.correo_apoderado}
                onChange={handleInputChange}
              />
            </div>
          </div>
          {apoderado.diferentePadres && (
            <>
              <hr></hr>
              <label className="form-check-label" htmlFor="gridCheck1">
                <h6>Informacion de los Padres de Familia</h6>
                <div className="row">
                  <div className="col-md-8">
                    <div className="mb-3">
                      <label htmlFor="nombreApoderado" className="form-label">
                        Nombre y Apellido Completo del Padre:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="nombreApoderado"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="tipoDocumentoApoderado"
                        className="form-label"
                      >
                        Tipo de documento del Padre
                      </label>
                      <select
                        className="form-select"
                        name="tipoDocumentoPadre"
                      >
                        <option defaultValue>Seleccione una opción</option>
                        <option value="DNI">DNI</option>
                        <option value="Pasaporte">Pasaporte</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="codigoDocumentoApoderado"
                        className="form-label"
                      >
                        Codigo de documento del Padre:
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        name="codigoDocumentoApoderado"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="telefonoApoderado" className="form-label">
                        Numero de Telefono del Padre
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        name="telefonoApoderado"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="correoApoderado" className="form-label">
                        Correo Electronico del Padre
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="correoApoderado"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="mb-3">
                      <label htmlFor="apellidoApoderado" className="form-label">
                        Nombre y Apellido Completo de la Madre:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="apellidoApoderado"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="tipoDocumentoApoderado"
                        className="form-label"
                      >
                        Tipo de documento de la Madre
                      </label>
                      <select
                        className="form-select"
                        name="tipoDocumentoMadre"
                      >
                        <option defaultValue>Seleccione una opción</option>
                        <option value="DNI">DNI</option>
                        <option value="Pasaporte">Pasaporte</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="codigoDocumentoApoderado"
                        className="form-label"
                      >
                        Codigo de documento de la Madre:
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        name="codigoDocumentoApoderado"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="telefonoApoderado" className="form-label">
                        Numero de Telefono de la Madre
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        name="telefonoApoderado"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="correoApoderado" className="form-label">
                        Correo Electronico de la Madre
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="correoApoderado"
                      />
                    </div>
                  </div>
                </div>
              </label>
            </>
          )}
          <hr></hr>
          <h6>Informacion del alumno</h6>
          <div>
            <div className="mb-3">
              <label htmlFor="genero" className="form-label">
                Genero:
              </label>
              <select className="form-select" name="genero">
                <option defaultValue>Seleccione una opción</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="nacionalidad" className="form-label">
                Nacionalidad
              </label>
              <input type="text" className="form-control" name="nacionalidad" />
            </div>
            <div className="mb-3">
              <label htmlFor="edad" className="form-label">
                Edad:
              </label>
              <input type="number" className="form-control" name="edad" />
            </div>
            <div className="mb-3">
              <label htmlFor="fecha_nacimiento" className="form-label">
                Fecha de Nacimiento:
              </label>
              <input
                type="date"
                className="form-control"
                name="fecha_nacimiento"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="direccion" className="form-label">
                Direccion de Domicilio:
              </label>
              <input type="text" className="form-control" name="direccion" />
            </div>
            <div className="mb-3">
              <label htmlFor="religion" className="form-label">
                Religion:
              </label>
              <input type="text" className="form-control" name="religion" />
            </div>
            <div className="mb-3">
              <label htmlFor="habilidadesCompetitivas" className="form-label">
                Habilidades Competitivas
              </label>
              <input
                type="text"
                className="form-control"
                name="habilidadesCompetitivas"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="sangre" className="form-label">
                Tipo de Sangre:
              </label>
              <input type="text" className="form-control" name="tipoSangre" />
            </div>
            <div className="mb-3">
              <label htmlFor="alergias" className="form-label">
                Alergias:
              </label>
              <textarea className="form-control" rows="2"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="enfermedadesHereditarias" className="form-label">
                Antecedentes de Enfermedades Hereditarias
              </label>
              <textarea className="form-control" rows="2"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="enfermedadesCronicas" className="form-label">
                Historial de Enfermedades Cronicas
              </label>
              <textarea className="form-control" rows="2"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="contrasenaApoderado" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                name="contrasenaApoderado"
                value={apoderado.contrasena}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="repetirContrasenaApoderado"
                className="form-label"
              >
                Repetir Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                name="repetirContrasenaApoderado"
                value={apoderado.repetir_contrasena_apoderado}
                onChange={handleChange}
              />
            </div>
          </div>
          <hr></hr>
          <button type="submit" className="btn btn-primary">
            Guardar la Informacion
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistroApoderado;
