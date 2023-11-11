import "bootstrap/dist/css/bootstrap.min.css";

export default function RegistroAsistenciaAlumno() {
  return (
    <from>
      <div className="container">
        <h1>Registrar Asistencia Alumno</h1>
        <div className="mb-3">
          <div className="row">
            <div className="col-sm-6">
              <label htmlFor="nombreAlumno" className="form-label">
                Seccion:
              </label>
            </div>
            <div className="col-6 col-sm-4">
              <label htmlFor="nombreAlumno" className="form-label">
                Profesor:
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
          <div className="mb-3">
            <table className="table table-bordered">
              <thead className="text-center">
                <tr>
                  <th>ALUMNOS</th>
                  <th className="col-sm-4">ASISTENCIA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center"></td>
                  <td className="text-center">
                    
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-outlined"
                      id="danger-outlined"
                      autocomplete="off"
                      checked
                    />
                    <label className="btn btn-outline-danger" htmlFor="danger-outlined">
                      Ausente
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-outlined"
                      id="success-outlined"
                      autocomplete="off"
                    />
                    <label
                      className="btn btn-outline-success"
                      htmlFor="success-outlined"
                    >
                      Asistio
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar Asistencia
        </button>
      </div>
    </from>
  );
}
