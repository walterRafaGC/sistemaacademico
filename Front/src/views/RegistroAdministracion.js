import "bootstrap/dist/css/bootstrap.min.css";

export default function RegistroAlumno() {
  return (
    <form>
      <div class="container">
        <h1>Registro de Trabajadores de la Institucion</h1>
        <h6>Rellenar todos los campos para un exitoso registro</h6>
        <div class="mb-3">
          <label for="nombreAlumno" class="form-label">
            Nombre Completo:
          </label>
          <input type="text" class="form-control" name="nombreAlumno" />
        </div>
        <div class="mb-3">
          <label for="apellidoAlumno" class="form-label">
            Apellido Completo:
          </label>
          <input type="text" class="form-control" name="apellidoAlumno" />
        </div>
        <div class="mb-3">
          <label for="fechaNacimientoAdministrador" class="form-label">
            Fecha de Nacimiento
          </label>
          <input
            type="date"
            class="form-control"
            name="fechaNacimientoAdministrador"
          />
        </div>
        <div class="mb-3">
          <label for="genero" class="form-label">
            Genero
          </label>
          <select class="form-select" name="genero">
            <option selected>Seleccione una opción</option>
            <option value="1">Femenino</option>
            <option value="2">Masculino</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="tipoDocumentoAlumno" class="form-label">
            Tipo de documento
          </label>
          <select class="form-select" name="tipoDocumentoAlumno">
            <option selected>Seleccione una opción</option>
            <option value="1">DNI</option>
            <option value="2">Pasaporte</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="codigoDocumentoAlumno" class="form-label">
            Codigo de documento:
          </label>
          <input type="number" class="form-control" name="codigoDocumentoAlumno" />
        </div>
        <div class="mb-3">
          <label for="fotoAdministrador" class="form-label">
            Fotografia
          </label>
          <input
              class="form-control"
              type="file"
              id="formFileMultiple"
              multiple
            />
        </div>
        <div class="mb-3">
          <label for="direccionAdministrador" class="form-label">
            Direccion de Domicilio
          </label>
          <input type="text" class="form-control" name="direccionAdministrador" />
        </div>
        <div class="mb-3">
          <label for="telefonoAdministrador" class="form-label">
            Numero de Telefono
          </label>
          <input type="number" class="form-control" name="telefonoAdministrador" />
        </div>
        <div class="mb-3">
          <label for="correoAdministrador" class="form-label">
            Correo Electronico
          </label>
          <input type="text" class="form-control" name="correoAdministrador" />
        </div>
        <div class="mb-3">
          <label for="cargoAdministrador" class="form-label">
            Puesto o Cargo
          </label>
          <select class="form-select" name="cargoAdministrador">
            <option selected>Seleccione una opción</option>
            <option value="1">Supervisor</option>
            <option value="2">Coordinador</option>
            <option value="3">Director</option>
            <option value="4">Sub-director</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="fechaInicioAdministrador" class="form-label">
            Fecha de Inicio de Empleo
          </label>
          <input
            type="date"
            class="form-control"
            name="fechaInicioAdministrador"
          />
        </div>
        <div class="mb-3">
          <label for="departamentoAdministrado" class="form-label">
            Departamento o Area
          </label>
          <input
            type="text"
            class="form-control"
            name="departamentoAdministrado"
          />
        </div>
        <div class="mb-3">
          <label for="salarioAdministrador" class="form-label">
            Salario
          </label>
          <input
            type="number"
            class="form-control"
            name="salarioAdministrador"
          />
        </div>
        <div class="mb-3">
          <label for="contratoAdministrador" class="form-label">
            Tipo de Contrato
          </label>
          <select class="form-select" name="contratoAdministrador">
            <option selected>Seleccione una opción</option>
            <option value="1">Tiempo Completo</option>
            <option value="2">Medio Tiempo</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="documentoAdministrador" class="form-label">
            Contrato Laboral
          </label>
          <input
            class="form-control"
            type="file"
            id="formFileMultiple"
            multiple
          />
        </div>
        <div class="mb-3">
          <label for="horarioAdministrador" class="form-label">
            Horario de Trabajo
          </label>
          <input type="text" class="form-control" name="horarioAdministrador" />
        </div>
        <button type="submit" class="btn btn-primary">
          Guardar la Informacion
        </button>
      </div>
    </form>
  );
}
