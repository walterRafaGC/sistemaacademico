import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import SlidingMenu from "./sidebar";

const RegistroAdministracion = () => {
  const [personal, setPersonal] = useState({
    Nombres_Personal_adminis: "",
    Apellidos: "",
    Fecha_Nacimiento: "",
    Genero: "",
    tipo_documento_personal_administrativo: "",
    Numero_Identificacion: "",
    Fotografia: "",
    Direccion_Domicilio: "",
    Numero_Telefono: "",
    Email: "",
    Puesto_Cargo: "",
    Fecha_Inicio_Empleo: "",
    Departamento_Area: "",
    Salario: "",
    Tipo_Contrato: "",
    Turno_Horario: "",
    Contrasena_Personal: "",
    repetir_contrasena_personal: "",
  });

  const [errorMessages, setErrorMessages] = useState({});

  const handleChange = (e) => {
    setPersonal({
      ...personal,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (personal.Contrasena_Personal !== personal.repetir_contrasena_personal) {
      setErrorMessages({ contrasena: "Las contraseñas no coinciden" });
      return;
    }

    setErrorMessages({});

    axios
      .post("http://localhost:8080/api/personalAdministrativo/save", {
        ...personal,
        repetir_contrasena_personal: undefined,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
        setErrorMessages(error.response.data.errorMessages);
      });
  };

  return (
    <div>
      <SlidingMenu />
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
              id="Nombres_Personal_adminis"
              name="Nombres_Personal_adminis"
              value={personal.Nombres_Personal_adminis}
              onChange={handleChange}
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
              id="Apellidos"
              name="Apellidos"
              value={personal.Apellidos}
              onChange={handleChange}
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
              id="Fecha_Nacimiento"
              name="Fecha_Nacimiento"
              value={personal.Fecha_Nacimiento}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="genero" className="form-label">
              Genero
            </label>
            <select
              className="form-select"
              id="Genero"
              name="Genero"
              value={personal.Genero}
              onChange={handleChange}
            >
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
              id="tipo_documento_personal_administrativo"
              name="tipo_documento_personal_administrativo"
              value={personal.tipo_documento_personal_administrativo}
              onChange={handleChange}
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
              id="Numero_Identificacion"
              name="Numero_Identificacion"
              value={personal.Numero_Identificacion}
              onChange={handleChange}
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
              id="Direccion_Domicilio"
              name="Direccion_Domicilio"
              value={personal.Direccion_Domicilio}
              onChange={handleChange}
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
              id="Numero_Telefono"
              name="Numero_Telefono"
              value={personal.Numero_Telefono}
              onChange={handleChange}
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
              id=""
              name="Email"
              value={personal.Email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="cargoPersonalAdministrativo "
              className="form-label"
            >
              Puesto o Cargo
            </label>
            <select
              className="form-select"
              id="Puesto_Cargo"
              name="Puesto_Cargo"
              value={personal.Puesto_Cargo}
              onChange={handleChange}
            >
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
              id="Fecha_Inicio_Empleo"
              name="Fecha_Inicio_Empleo"  
              value={personal.Fecha_Inicio_Empleo}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="departamentoAdministrativo" className="form-label">
              Departamento o Area
            </label>
            <input
              type="text"
              className="form-control"
              id="Departamento_Area"
              name="Departamento_Area"
              value={personal.Departamento_Area}
              onChange={handleChange}
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
              id="Salario"
              name="Salario"
              value={personal.Salario}
              onChange={handleChange}
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
              id="Tipo_Contrato"
              name="Tipo_Contrato"
              value={personal.Tipo_Contrato}
              onChange={handleChange}
            >
              <option defaultValue>Seleccione una opción</option>
              <option value="Tiempo Completo">Tiempo Completo</option>
              <option value="Medio Tiempo">Medio Tiempo</option>
            </select>
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
              id="Turno_Horario"
              name="Turno_Horario" 
              value={personal.Turno_Horario}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contrasena_profesor" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="Contrasena_Personal"
              name="Contrasena_Personal"
              value={personal.Contrasena_Personal}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="repetir_contrasena_profesor" className="form-label">
              Repetir Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="repetir_contrasena_personal"
              name="repetir_contrasena_personal"
              value={personal.repetir_contrasena_personal}
              onChange={handleChange}
            />
            {errorMessages.contrasena && (
              <div className="text-danger">{errorMessages.contrasena}</div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Guardar la Informacion
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistroAdministracion;
