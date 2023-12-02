import "bootstrap/dist/css/bootstrap.min.css";
import SlidingMenu from "./sidebar";
import "../css/margen-horario.css";

const Horario = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <SlidingMenu />
        </div>
        <div className="col-md-9"></div>
        <from className="custom-form2">
          <div className="container">
            <h1>Horario de clase</h1>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary">
                Crear Nueva Seccion
              </button>
            </div>
            <div className="mb-3">
              <label htmlFor="seccion" className="form-label">
                Buscar Seccion
              </label>
              <div>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Seccion"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Buscar
                  </button>
                </form>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="tipoDocumentoAlumno" className="form-label">
                Seleccione los cursos
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Matematica
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Lengua
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="profesorHorario" className="form-label">
                Buscar el nombre del Profesor
              </label>
              <div>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Profesor"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Buscar
                  </button>
                </form>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="fechaInicio" className="form-label">
                Dia de la Semana
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Lunes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Martes
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="profesorHorario" className="form-label">
                Buscar el nombre de los alumnos
              </label>
              <div>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Alumno"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Buscar
                  </button>
                </form>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="seccionHorario" className="form-label">
                Hora de Inicio
              </label>
              <input type="time" className="form-control" name="seccion" />
            </div>
            <div className="mb-3">
              <label htmlFor="seccionHorario" className="form-label">
                Hora de Final
              </label>
              <input type="time" className="form-control" name="seccion" />
            </div>
            <div className="mb-3">
              <label htmlFor="nota_final" className="form-label">
                Visualizacion del horario registrado
              </label>
              <table className="table table-bordered">
                <thead className="text-center">
                  <tr>
                    <th>HORA/DIA</th>
                    <th className="col-sm-2">Lunes</th>
                    <th className="col-sm-2">Martes</th>
                    <th className="col-sm-2">Miercoles</th>
                    <th className="col-sm-2">Jueves</th>
                    <th className="col-sm-2">Viernes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="text-center">07:00 - 08:00</th>
                    <td className="text-center" colspan="5">
                      INGRESO
                    </td>
                  </tr>
                  <tr>
                    <th className="text-center">08:00 - 08:30</th>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                  </tr>
                  <tr>
                    <th className="text-center">08:30 - 09:00</th>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                  </tr>
                  <tr>
                    <th className="text-center">09:00 - 09:30</th>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                  </tr>
                  <tr>
                    <th className="text-center">09:30 - 10:00</th>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                  </tr>
                  <tr>
                    <th className="text-center">10:00 - 10:30</th>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                  </tr>
                  <tr>
                    <th className="text-center">10:30 - 11:00</th>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                  </tr>
                  <tr>
                    <th className="text-center">11:00 - 11:30</th>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                  </tr>
                  <tr>
                    <th className="text-center">11:30 - 12:00</th>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                  </tr>
                  <tr>
                    <th className="text-center">12:00 - 12:30</th>
                    <td className="text-center" colspan="5">
                      RECREO
                    </td>
                  </tr>
                  <tr>
                    <th className="text-center">12:30 - 13:00</th>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                  </tr>
                  <tr>
                    <th className="text-center">13:00 - 13:30</th>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                  </tr>
                  <tr>
                    <th className="text-center">13:30 - 14:00</th>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                  </tr>
                  <tr>
                    <th className="text-center">14:00 - 14:30</th>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                  </tr>
                  <tr>
                    <th className="text-center">14:30 - 15:00</th>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                    <td className="col-sm-2"></td>
                  </tr>
                  <tr>
                    <th className="text-center">15:00 - 16:00</th>
                    <td className="text-center" colspan="5">
                      SALIDA
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </div>
        </from>
      </div>
    </div>
  );
};

export default Horario;
