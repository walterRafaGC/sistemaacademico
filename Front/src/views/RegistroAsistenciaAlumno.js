import "bootstrap/dist/css/bootstrap.min.css";

export default function RegistroAsistenciaAlumno() {
  return (
    <from>
      <div className="container">
        <h1>Registrar Asistencia Alumno</h1>
        <div class="mb-3">
          <div class="row">
            <div class="col-sm-6">
              <label for="nombreAlumno" class="form-label">
                Seccion:
              </label>
            </div>
            <div class="col-6 col-sm-4">
              <label for="nombreAlumno" class="form-label">
                Profesor:
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
          <div class="mb-3">
            <table class="table table-bordered">
              <thead class="text-center">
                <tr>
                  <th>ALUMNOS</th>
                  <th class="col-sm-4">ASISTENCIA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center"></td>
                  <td class="text-center">
                    
                    <input
                      type="radio"
                      class="btn-check"
                      name="options-outlined"
                      id="danger-outlined"
                      autocomplete="off"
                      checked
                    />
                    <label class="btn btn-outline-danger" for="danger-outlined">
                      Ausente
                    </label>
                    <input
                      type="radio"
                      class="btn-check"
                      name="options-outlined"
                      id="success-outlined"
                      autocomplete="off"
                    />
                    <label
                      class="btn btn-outline-success"
                      for="success-outlined"
                    >
                      Asistio
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Guardar Asistencia
        </button>
      </div>
    </from>
  );
}
