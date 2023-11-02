import "bootstrap/dist/css/bootstrap.min.css";

export default function RegistroNota() {
  return (
    <from>
      <div className="container">
        <h1>Registrar Notas</h1>
        <div class="mb-3">
          <label for="seccion" class="form-label">
            Escribir la Seccion
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
          <label for="curso" class="form-label">
            Seleccione el curso
          </label>
          <select class="form-select" name="curso">
            <option selected>Seleccione una opción</option>
            <option value="1">Lengua</option>
            <option value="2">Matematica</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="seccion" class="form-label">
            Escribir el nombre completo del alumno
          </label>
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
          <label for="nota_final" class="form-label">
            Rellenar todo los campos con las notas del alumno por bimestre
          </label>
          <table class="table table-borderless">
            <thead class="text-center">
              <tr>
                <th>Calificaciones</th>
                <th>Nota</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Examenes</td>
                <td>
                  <div class="form-group col-md-2">
                    <input type="number" class="form-control" id="notaExamen" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Trabajos</td>
                <td>
                  <div class="form-group col-md-2">
                    <input
                      type="number"
                      class="form-control"
                      id="notaTrabajo"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Exposiciones</td>
                <td>
                  <div class="form-group col-md-2">
                    <input type="number" class="form-control" id="notaExpo" />
                  </div>
                </td>
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
