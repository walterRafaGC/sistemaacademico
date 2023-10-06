import "bootstrap/dist/css/bootstrap.min.css";
export default function RegistroAlumno() {
  return (
    <form>
      <div class="container">
        <h1>Registro del Alumno</h1>
        <h6>Rellenar todos los campos para un exitoso registro</h6>
        <div class="mb-3">
          <label for="nombreAlumno" class="form-label">
            Nombre Completo del Alumno:
          </label>
          <input type="text" class="form-control" name="nombreAlumno" />
        </div>
        <div class="mb-3">
          <label for="apellidoAlumno" class="form-label">
            Apellido Completo del Alumno:
          </label>
          <input type="text" class="form-control" name="apellidoAlumno" />
        </div>
        <div class="mb-3">
          <label for="tipoDocumentoAlumno" class="form-label">Tipo de documento</label>
          <select class="form-select" name="tipoDocumentoAlumno">
            <option selected>Seleccione una opción</option>
            <option value="1">DNI</option>
            <option value="3">Pasaporte</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="codigoDocumentoAlumno" class="form-label">Codigo de documento:</label>
          <input type="number" class="form-control" name="codigoDocumentoAlumno" />
        </div>
        <div class="mb-3">
          <label for="codigoEstudianteAlumno" class="form-label">Codigo de Estudiante(PUM):</label>
          <input type="number" class="form-control" name="codigoEstudianteAlumno" />
        </div>
        <button type="submit" class="btn btn-primary">
          Guardar la Informacion
        </button>
      </div>
    </form>
  );
}
