import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    contrasena: "",
    repetir_contrasena_apoderado: "",
    id_hijo_apoderado: "",
  });

  const [padre, setPadre] = useState({
    nombre_padre: "",
    tipo_documento_padre: "",
    numero_documento_padre: "",
    telefono_padre: "",
    correo_padre: "",
    nombre_madre: "",
    tipo_documento_madre: "",
    numero_documento_madre: "",
    telefono_madre: "",
    correo_madre: "",
  });

  const [alumno, setAlumno] = useState({
    colegio_procedencia: "",
    grado_academico_alumno: "",
    certificaciones_alumno: "",
    genero_alumno: "",
    nacionalidad_alumno: "",
    edad_alumno: "",
    fecha_nacimiento_alumno: "",
    direccion_alumno: "",
    religion_alumno: "",
    habilidades_alumno: "",
    sangre_alumno: "",
    alergias_alumno: "",
    enfermedades_hereditarias: "",
    enfermedades_cronicas: "",
  });

  const [errorMessages, setErrorMessages] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    // Utiliza un solo estado y actualiza según el nombre del campo
    if (name in apoderado) {
      setApoderado({
        ...apoderado,
        [name]: name === "diferentePadres" ? checked : value,
      });
    } else if (name in padre) {
      setPadre({
        ...padre,
        [name]: value,
      });
    } else if (name in alumno) {
      setAlumno({
        ...alumno,
        [name]: value,
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
      .post("http://localhost:8080/api/apoderado/save", {
        ...apoderado,
        repetir_contrasena_apoderado: undefined,
      })
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
        setErrorMessages(error.response.data.errorMessages);
      });

    axios
      .post("http://localhost:8080/api/padre/save", {
        ...padre,
      })
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
        setErrorMessages(error.response.data.errorMessages);
      });

    axios
      .post("http://localhost:8080/api/alumno/save", {
        ...alumno,
      })
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
        setErrorMessages(error.response.data.errorMessages);
      });
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
              onChange={handleChange}
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
                id="nombre_apoderado"
                name="nombre_apoderado"
                value={apoderado.nombre_apoderado}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="apellidoApoderado" className="form-label">
                Apellido Completo del Apoderado:
              </label>
              <input
                type="text"
                className="form-control"
                id="apellido_apoderado"
                name="apellido_apoderado"
                value={apoderado.apellido_apoderado}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tipoDocumentoApoderado" className="form-label">
                Tipo de documento
              </label>
              <select
                className="form-select"
                id="tipo_documento_apoderado"
                name="tipo_documento_apoderado"
                value={apoderado.tipo_documento_apoderado}
                onChange={handleChange}
              >
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
                id="dni_apoderado"
                name="dni_apoderado"
                value={apoderado.dni_apoderado}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefonoApoderado" className="form-label">
                Numero de Telefono
              </label>
              <input
                type="number"
                className="form-control"
                id="telefono_apoderado"
                name="telefono_apoderado"
                value={apoderado.telefono_apoderado}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="direccionApoderado" className="form-label">
                Direccion de Domicilio
              </label>
              <input
                type="text"
                className="form-control"
                id="direccion_apoderado"
                name="direccion_apoderado"
                value={apoderado.direccion_apoderado}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="correoApoderado" className="form-label">
                Correo Electronico
              </label>
              <input
                type="text"
                className="form-control"
                id="correo_apoderado"
                name="correo_apoderado"
                value={apoderado.correo_apoderado}
                onChange={handleChange}
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
                        id="nombre_padre"
                        name="nombre_padre"
                        value={padre.nombre_padre}
                        onChange={handleChange}
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
                        id="tipo_documento_padre"
                        name="tipo_documento_padre"
                        value={padre.tipo_documento_padre}
                        onChange={handleChange}
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
                        id="numero_documento_padre"
                        name="numero_documento_padre"
                        value={padre.numero_documento_padre}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="telefonoApoderado" className="form-label">
                        Numero de Telefono del Padre
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="telefono_padre"
                        name="telefono_padre"
                        value={padre.telefono_padre}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="correoApoderado" className="form-label">
                        Correo Electronico del Padre
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="correo_padre"
                        name="correo_padre"
                        value={padre.correo_padre}
                        onChange={handleChange}
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
                        id="nombre_madre"
                        name="nombre_madre"
                        value={padre.nombre_madre}
                        onChange={handleChange}
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
                        id="tipo_documento_madre"
                        name="tipo_documento_madre"
                        value={padre.tipo_documento_madre}
                        onChange={handleChange}
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
                        id="numero_documento_madre"
                        name="numero_documento_madre"
                        value={padre.numero_documento_madre}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="telefonoApoderado" className="form-label">
                        Numero de Telefono de la Madre
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="telefono_madre"
                        name="telefono_madre"
                        value={padre.telefono_madre}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="correoApoderado" className="form-label">
                        Correo Electronico de la Madre
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="correo_madre"
                        name="correo_madre"
                        value={padre.correo_madre}
                        onChange={handleChange}
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
              <select
                className="form-select"
                id="genero_alumno"
                name="genero_alumno"
                value={alumno.genero_alumno}
                onChange={handleChange}
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
                id="nacionalidad_alumno"
                name="nacionalidad_alumno"
                value={alumno.nacionalidad_alumno}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="edad" className="form-label">
                Edad:
              </label>
              <input
                type="number"
                className="form-control"
                id="edad_alumno"
                name="edad_alumno"
                value={alumno.edad_alumno}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="fecha_nacimiento" className="form-label">
                Fecha de Nacimiento:
              </label>
              <input
                type="date"
                className="form-control"
                id="fecha_nacimiento_alumno"
                name="fecha_nacimiento_alumno"
                value={alumno.fecha_nacimiento_alumno}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="direccion" className="form-label">
                Direccion de Domicilio:
              </label>
              <input
                type="text"
                className="form-control"
                id="direccion_alumno"
                name="direccion_alumno"
                value={alumno.direccion_alumno}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="religion" className="form-label">
                Religion:
              </label>
              <input
                type="text"
                className="form-control"
                id="religion_alumno"
                name="religion_alumno"
                value={alumno.religion_alumno}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="habilidadesCompetitivas" className="form-label">
                Habilidades Competitivas
              </label>
              <input
                type="text"
                className="form-control"
                id="habilidades_alumno"
                name="habilidades_alumno"
                value={alumno.habilidades_alumno}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="sangre" className="form-label">
                Tipo de Sangre:
              </label>
              <input
                type="text"
                className="form-control"
                id="sangre_alumno"
                name="sangre_alumno"
                value={alumno.sangre_alumno}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="alergias" className="form-label">
                Alergias:
              </label>
              <textarea
                className="form-control"
                rows="2"
                id="alergias_alumno"
                name="alergias_alumno"
                value={alumno.alergias_alumno}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="enfermedadesHereditarias" className="form-label">
                Antecedentes de Enfermedades Hereditarias
              </label>
              <textarea
                className="form-control"
                rows="2"
                id="enfermedades_hereditarias"
                name="enfermedades_hereditarias"
                value={alumno.enfermedades_hereditarias}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="enfermedadesCronicas" className="form-label">
                Historial de Enfermedades Cronicas
              </label>
              <textarea
                className="form-control"
                rows="2"
                id="enfermedades_cronicas"
                name="enfermedades_cronicas"
                value={alumno.enfermedades_cronicas}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="contrasenaApoderado" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="contrasena"
                name="contrasena"
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
                id="repetir_contrasena_apoderado"
                name="repetir_contrasena_apoderado"
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
