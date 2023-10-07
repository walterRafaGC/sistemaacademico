import "bootstrap/dist/css/bootstrap.min.css";
export default function Menu() {
  return (
    <form>
      <div class="container">
        <h1>Menu Principal</h1>
        <div>
          <a
            href="http://localhost:3000/registroAlumno"
            class="btn btn-secondary"
            role="button"
          >
            Registro de los alumnos
          </a>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#contenedor-modal"
          >
            Resgistrate
          </button>
        </div>
        <div
          class="modal fade"
          id="contenedor-modal"
          data-bs-backdrop="static"
          tabindex="-1"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">
                  Regitro de la plataforma
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <h6>Seleccione su rol para el comienzo del regitro</h6>
                <div>
                  <button type="button" class="btn btn-secondary">
                    Apoderado
                  </button>
                </div>
                <div>
                  <button type="button" class="btn btn-primary">
                    Profesor
                  </button>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
