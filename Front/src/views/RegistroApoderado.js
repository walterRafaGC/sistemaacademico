import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from "axios";

const RegistroApoderado = () => {
  const [apoderadoData, setApoderadoData] = useState({
    nombreApoderado: "",
    apellidoApoderado: "",
    tipoDocumentoApoderado: "",
    codigoDocumentoApoderado: "",
    telefonoApoderado: "",
    direccionApoderado: "",
    correoApoderado: "",
    diferentePadres: false,
  });

  const [padresData, setPadresData] = useState({
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

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    // Check which part of the form is being updated
    if (name in apoderadoData) {
      setApoderadoData({
        ...apoderadoData,
        [name]: name === "diferentePadres" ? checked : value,
      });
    } else if (name in padresData) {
      setPadresData({
        ...padresData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace "API_ENDPOINT" with your actual API endpoint
      const response = await axios.post("API", {
        ...apoderadoData,
        ...padresData,
      });
      console.log("Data successfully submitted:", response.data);

      // Optionally, reset the form after successful submission
      setApoderadoData({
        nombreApoderado: "",
        apellidoApoderado: "",
        tipoDocumentoApoderado: "",
        codigoDocumentoApoderado: "",
        telefonoApoderado: "",
        direccionApoderado: "",
        correoApoderado: "",
        diferentePadres: false,
      });

      setPadresData({
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
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
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
            checked={apoderadoData.diferentePadres}
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
              value={apoderadoData.nombreApoderado}
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
              value={apoderadoData.apellidoApoderado}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tipoDocumentoApoderado" className="form-label">
              Tipo de documento
            </label>
            <select className="form-select" name="tipoDocumentoApoderado">
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
              value={apoderadoData.codigoDocumentoApoderado}
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
              value={apoderadoData.telefonoApoderado}
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
              value={apoderadoData.direccionApoderado}
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
              value={apoderadoData.correoApoderado}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {apoderadoData.diferentePadres && (
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
                      value={padresData.nombrePadre}
                      onChange={handleInputChange}
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
                      value={padresData.tipoDocumentoPadre}
                      onChange={handleInputChange}
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
                      value={padresData.codigoDocumentoPadre}
                      onChange={handleInputChange}
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
                      value={padresData.tipoDocumentoPadre}
                      onChange={handleInputChange}
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
                      value={padresData.correoPadre}
                      onChange={handleInputChange}
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
                      value={padresData.nombreMadre}
                      onChange={handleInputChange}
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
                      value={padresData.tipoDocumentoMadre}
                      onChange={handleInputChange}
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
                      value={padresData.codigoDocumentoMadre}
                      onChange={handleInputChange}
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
                      value={padresData.telefonoMadre}
                      onChange={handleInputChange}
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
                      value={padresData.correoMadre}
                      onChange={handleInputChange}
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
            />
          </div>
          <div className="mb-3">
            <label htmlFor="repetirContrasenaApoderado" className="form-label">
              Repetir Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              name="repetirContrasenaApoderado"
            />
          </div>
        </div>
        <hr></hr>
        <button type="submit" className="btn btn-primary">
          Guardar la Informacion
        </button>
      </div>
    </form>
  );
};

export default RegistroApoderado;
