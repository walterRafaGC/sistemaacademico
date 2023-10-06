import "bootstrap/dist/css/bootstrap.min.css";
export default function RegistroApoderado() {
  return (
    <form>
      <div class="container">
        <h1>Registro del Apoderado</h1>
        <h6>Rellenar todos los campos para un exitoso registro</h6>
        <hr></hr>
        <h6>Informacion del Apoderado y familiar</h6>
        <div>
          <div class="mb-3">
            <label for="nombreApoderado" class="form-label">
              Nombre Completo del Apoderado:
            </label>
            <input type="text" class="form-control" name="nombreApoderado" />
          </div>
          <div class="mb-3">
            <label for="apellidoApoderado" class="form-label">Apellido Completo del Apoderado:</label>
            <input type="text" class="form-control" name="apellidoApoderado" />
          </div>
          <div class="mb-3">
            <label for="tipoDocumentoApoderado" class="form-label">Tipo de documento</label>
            <select class="form-select" name="tipoDocumentoApoderado">
              <option selected>Seleccione una opción</option>
              <option value="1">DNI</option>
              <option value="3">Pasaporte</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="codigoDocumentoApoderado" class="form-label">Codigo de documento:</label>
            <input type="number" class="form-control" name="codigoDocumentoApoderado" />
          </div>
        </div>
        <hr></hr>
        <h6>Informacion del alumno registrado en la institucion</h6>
        <div>
          <div class="mb-3">
            <label for="gradoAcademico" class="form-label">Grado Academico Anterior:</label>
            <input type="text" class="form-control" name="gradoAcademico" />
          </div>
        </div>
        <hr></hr>
        <h6>Informacion medica del alumno</h6>
        <div>
          <div class="mb-3">
            <label for="sangre" class="form-label">
              Tipo de Sangre:
            </label>
            <input type="text" class="form-control" name="tipoSangre" />
          </div>
          <div class="mb-3">
            <label for="alergias" class="form-label">
              Alergias:
            </label>
            <textarea
              class="form-control"
              rows="2"
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="enfermedadesHereditarias" class="form-label">
              Antecedentes de Enfermedades Hereditarias
            </label>
            <textarea
              class="form-control"
              rows="2"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Guardar la Informacion
          </button>
        </div>
      </div>
    </form>
  );
}
