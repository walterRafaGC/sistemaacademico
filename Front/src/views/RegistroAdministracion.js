import "bootstrap/dist/css/bootstrap.min.css";
export default function RegistroAdministracion(){
  return (
    <form>
      <div className="container">
        <h1>Registro de Trabajadores de la Institucion</h1>
        <h6>Rellenar todos los campos para un exitoso registro</h6>
        <div className="mb-3">
          <label htmlFor="nombrePersonalAdministrativo" className="form-label">
            Nombre Completo:
          </label>
          <input 
          type="text" className="form-control" name="nombrePersonalAdmninitrativo" />
        </div>
        <div className="mb-3">
          <label htmlFor="apellidoPersonalAdministrativo" className="form-label">
            Apellido Completo:
          </label>
          <input type="text" className="form-control" name="apellidoPersonalAdministrativo" />
        </div>
        <div className="mb-3">
          <label htmlFor="fechaNacimientoPersonalAdministrativo" 
          className="form-label">
            Fecha de Nacimiento
          </label>
          <input
            type="date"
            className="form-control"
            name="fechaNacimientoPersonalAdministrativo"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="genero" className="form-label">
            Genero
          </label>
          <select className="form-select" name="genero">
            <option defaultValue>Seleccione una opción</option>
            <option value="Femenino">Femenino</option>
            <option value="Masculino">Masculino</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="tipoDocumentoPersonalAdministrativo" className="form-label">
            Tipo de documento
          </label>
          <select className="form-select" name="tipoDocumentoPersonalAdministrativo">
            <option defaultValue>Seleccione una opción</option>
            <option value="DNI">DNI</option>
            <option value="Pasaporte">Pasaporte</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="codigoDocumentoPersonalAdministrativo" className="form-label">
            Codigo de documento:
          </label>
          <input type="number" className="form-control" name="codigoDocumentoPersonalAdministrativo" />
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
          <label htmlFor="direccionPersonalAdministrativo" className="form-label">
            Direccion de Domicilio
          </label>
          <input type="text" className="form-control" name="direccionPersonalAdministrativo" />
        </div>
        <div className="mb-3">
          <label htmlFor="telefonoPersonalAdministrativo" className="form-label">
            Numero de Telefono
          </label>
          <input type="number" className="form-control" name="telefonoPersonalAdministrativo" />
        </div>
        <div className="mb-3">
          <label htmlFor="correoPersonalAdministrativo" className="form-label">
            Correo Electronico
          </label>
          <input type="text" className="form-control" name="correoPersonalAdministrativo" />
        </div>
        <div className="mb-3">
          <label htmlFor="cargoPersonalAdministrativo "className="form-label">
            Puesto o Cargo
          </label>
          <select className="form-select" name="cargoPersonalAdministrativo">
            <option defaultValue>Seleccione una opción</option>
            <option value="Supervisor">Supervisor</option>
            <option value="Coordinador">Coordinador</option>
            <option value="Director">Director</option>
            <option value="Sub-director">Sub-director</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="fechaInicioPersonalAdministrativo" className="form-label">
            Fecha de Inicio de Empleo
          </label>
          <input
            type="date"
            className="form-control"
            name="fechaInicioPersonalAdministrativo"
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
          />
        </div>
        <div className="mb-3">
          <label htmlFor="salarioPersonalAdministrativo" className="form-label">
            Salario
          </label>
          <input
            type="number"
            className="form-control"
            name="salarioPersonalAdministrativo"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contratoPersonalAdministrativo" className="form-label">
            Tipo de Contrato
          </label>
          <select className="form-select" name="contratoPersonalAdministrativo">
            <option defaultValue>Seleccione una opción</option>
            <option value="Tiempo Completo">Tiempo Completo</option>
            <option value="Medio Tiempo">Medio Tiempo</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="documentoPersonalAdministrativo" className="form-label">
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
          <label htmlFor="horarioPersonalAdministrativo" className="form-label">
            Horario de Trabajo
          </label>
          <input type="text" className="form-control" name="horarioPersonalAdministrativo" />
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar la Informacion
        </button>
      </div>
    </form>
  );
}
