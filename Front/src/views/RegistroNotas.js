import "bootstrap/dist/css/bootstrap.min.css";
import SlidingMenu from "./sidebar";
import "../css/margen-Registro-Notas.css";

const RegistroNota = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <SlidingMenu />
        </div>
        <div className="col-md-9">
          <form className="custom-form7">
            <div className="container">
              <h1>Registrar Notas</h1>
              <div className="mb-3">
                <label htmlFor="seccion" className="form-label">
                  Escribir la Seccion
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
                <label htmlFor="curso" className="form-label">
                  Seleccione el curso
                </label>
                <select className="form-select" name="curso">
                  <option defaultValue>Seleccione una opción</option>
                  <option value="Lengua">Lengua</option>
                  <option value="Matematica">Matematica</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="seccion" className="form-label">
                  Escribir el nombre completo del alumno
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
                <label htmlFor="nota_final" className="form-label">
                  Rellenar todo los campos con las notas del alumno por bimestre
                </label>
                <table className="table table-borderless">
                  <thead className="text-center">
                    <tr>
                      <th>Calificaciones</th>
                      <th>Nota</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Examenes</td>
                      <td>
                        <div className="form-group col-md-2">
                          <input
                            type="number"
                            className="form-control"
                            id="notaExamen"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Trabajos</td>
                      <td>
                        <div className="form-group col-md-2">
                          <input
                            type="number"
                            className="form-control"
                            id="notaTrabajo"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Exposiciones</td>
                      <td>
                        <div className="form-group col-md-2">
                          <input
                            type="number"
                            className="form-control"
                            id="notaExpo"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button type="submit" className="btn btn-primary">
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistroNota;
