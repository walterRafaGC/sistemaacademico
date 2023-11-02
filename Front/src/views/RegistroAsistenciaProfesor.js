import "bootstrap/dist/css/bootstrap.min.css";

export default function RegistroAsistenciaProfesor() {
  return (
    <from>
      <div className="container">
        <h1>Registrar Asistencia Profesor</h1>
        <div class="mb-3">
          <div class="row">
            <div class="col-sm-6">
              <label for="nombreAlumno" class="form-label">
                Seccion:
              </label>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <label for="nombreAlumno" class="form-label">
                Curso
              </label>
            </div>
            <div class="col-6 col-sm-4">
              <label for="nombreAlumno" class="form-label">
                Fecha
              </label>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <label for="nombreAlumno" class="form-label">
                Hora de Inicio
              </label>
            </div>
            <div class="col-sm-6">
              <label for="nombreAlumno" class="form-label">
                Hora Final
              </label>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Marcado de Asistencia
        </button>
      </div>
    </from>
  );
}
