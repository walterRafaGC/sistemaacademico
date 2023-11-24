import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import SlidingMenu from "./SlidingMenu";

const RegistroAdministracion = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
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
    contrasena_personal: "",
    repetir_contrasena_personal: "",
  });

  const [errorMessages, setErrorMessages] = useState({});

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleChange = (e) => {
    setPersonal({
      ...personal,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (personal.contrasena_personal !== personal.repetir_contrasena_personal) {
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
              name="apellidoPersonalAdministrativo"
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
              name="fechaNacimientoPersonalAdministrativo"
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
              name="genero"
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
              name="tipoDocumentoPersonalAdministrativo"
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
              name="codigoDocumentoPersonalAdministrativo"
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
              name="direccionPersonalAdministrativo"
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
              name="telefonoPersonalAdministrativo"
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
              name="correoPersonalAdministrativo"
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
              name="cargoPersonalAdministrativo"
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
              name="fechaInicioPersonalAdministrativo"  
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
              name="departamentoAdministrativo"
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
              name="salarioPersonalAdministrativo"
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
              name="contratoPersonalAdministrativo"
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
              name="horarioPersonalAdministrativo" 
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
              id="contrasena_profesor"
              name="contrasena_profesor"
              value={personal.contrasena_personal}
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
              id="repetir_contrasena_profesor"
              name="repetir_contrasena_profesor"
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
