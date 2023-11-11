import "bootstrap/dist/css/bootstrap.min.css";
export default function RegistroAsistenciaProfesor() {
  return (
    <from>
      <div className="container">
        <h1>Registrar Asistencia Profesor</h1>
        <div className="mb-3">
          <div className="row">
            <div className="col-sm-6">
              <label htmlFor="nombreAlumno" className="form-label">
                Seccion:
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <label htmlFor="nombreAlumno" className="form-label">
                Curso
              </label>
            </div>
            <div className="col-6 col-sm-4">
              <label htmlFor="nombreAlumno" className="form-label">
                Fecha
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <label htmlFor="nombreAlumno" className="form-label">
                Hora de Inicio
              </label>
            </div>
            <div className="col-sm-6">
              <label htmlFor="nombreAlumno" className="form-label">
                Hora Final
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Marcado de Asistencia
        </button>
      </div>
    </from>
  );
}
