import "bootstrap/dist/css/bootstrap.min.css";

export default function Horario() {
  return (
    <from>
      <div className="container">
        <h1>Horario de clase</h1>
        <div class="mb-3">
        <button type="submit" class="btn btn-primary">
          Crear Nueva Seccion
        </button>
        </div>
        <div class="mb-3">
          <label for="seccion" class="form-label">
            Buscar Seccion
          </label>
          <div>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Seccion"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
        <div class="mb-3">
          <label for="tipoDocumentoAlumno" class="form-label">
            Seleccione los cursos
          </label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Matematica
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Lengua
            </label>
          </div>
        </div>
        <div class="mb-3">
          <label for="profesorHorario" class="form-label">Buscar el nombre del Profesor</label>
          <div>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Profesor"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
        <div class="mb-3">
          <label for="fechaInicio" class="form-label">Dia de la Semana</label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Lunes
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Martes
            </label>
          </div>
        </div>
        <div class="mb-3">
          <label for="profesorHorario" class="form-label">Buscar el nombre de los alumnos</label>
          <div>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Alumno"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
        <div class="mb-3">
          <label for="seccionHorario" class="form-label">Hora de Inicio</label>
          <input type="time" class="form-control" name="seccion" />
        </div>
        <div class="mb-3">
          <label for="seccionHorario" class="form-label">Hora de Final</label>
          <input type="time" class="form-control" name="seccion" />
        </div>
        <div class="mb-3">
          <label for="nota_final" class="form-label">
            Visualizacion del horario registrado
          </label>
          <table class="table table-bordered">
            <thead class="text-center">
              <tr>
                <th>HORA/DIA</th>
                <th class="col-sm-2">Lunes</th>
                <th class="col-sm-2">Martes</th>
                <th class="col-sm-2">Miercoles</th>
                <th class="col-sm-2">Jueves</th>
                <th class="col-sm-2">Viernes</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <th class="text-center">07:00 - 08:00</th>
                <td class="text-center" colspan="5">INGRESO</td>
              </tr>
              <tr>
                <th class="text-center">08:00 - 08:30</th>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
              </tr>
              <tr>
                <th class="text-center">08:30 - 09:00</th>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
              </tr>
              <tr>
                <th class="text-center">09:00 - 09:30</th>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
              </tr>
              <tr>
                <th class="text-center">09:30 - 10:00</th>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
              </tr>
              <tr>
                <th class="text-center">10:00 - 10:30</th>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
              </tr>
              <tr>
                <th class="text-center">10:30 - 11:00</th>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
              </tr>
              <tr>
                <th class="text-center">11:00 - 11:30</th>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
              </tr>
              <tr>
                <th class="text-center">11:30 - 12:00</th>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
              </tr>
              <tr>
                <th class="text-center">12:00 - 12:30</th>
                <td class="text-center" colspan="5">RECREO</td>
              </tr>
              <tr>
                <th class="text-center">12:30 - 13:00</th>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
              </tr>
              <tr>
                <th class="text-center">13:00 - 13:30</th>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
              </tr>
              <tr>
                <th class="text-center">13:30 - 14:00</th>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
              </tr>
              <tr>
                <th class="text-center">14:00 - 14:30</th>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
              </tr>
              <tr>
                <th class="text-center">14:30 - 15:00</th>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
                <td class="col-sm-2"></td>
              </tr>
              <tr>
                <th class="text-center">15:00 - 16:00</th>
                <td class="text-center" colspan="5">SALIDA</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button type="submit" class="btn btn-primary">
          Guardar
        </button>
      </div>
    </from>
  );
}
