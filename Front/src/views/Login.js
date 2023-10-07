import "../css/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Login() {
  return (
    <form>
      <div class="container">
        <h2 class="login-title">- Inicia Sesion -</h2>
        <h6>
          Puedes hacer todo lo que necesitas en tu vida escolar. Revisa tus
          horarios, notas, eventos, trámites y más. De manera más fácil y
          sencilla.
        </h6>
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="container"> </div>
            <div class="input-group login-userinput">
              <input
                id="txtUser"
                type="text"
                class="form-control"
                name="username"
                placeholder="DNI"
              />
            </div>
            <div class="input-group">
              <input
                id="txtPassword"
                type="password"
                class="form-control"
                name="password"
                placeholder="Contraseña"
              />
            </div>
            <div>
              <label class="checkbox login-options">
                <input type="checkbox" /> Recordarme
              </label>
            </div>
            <button
              class="btn btn-primary btn-block login-button"
              type="submit"
              href="http://localhost:3000/menu"
            >
              Ingresar
            </button>
            <div>
              <p>
                No tienes una cuenta, entonces 
                <button
                  type="text"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#registro"
                >
                   Resgistrate
                </button><br />
                <a href="http://localhost:3000/registroApoderado">
                  Registrate aqui Apoderado
                </a><br />
                <a href="http://localhost:3000/registroProfesor">
                  Registrate aqui Profesor
                </a>
              </p>
              <a
                href="http://localhost:3000/cambiarContraseña"
                class="login-forgot"
              >
                Cambiar de Contraseña
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="registro"
        tabindex="-1"
        aria-labelledby="registro"
        aria-hidden="true"
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
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
