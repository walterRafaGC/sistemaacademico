import "../css/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Login() {
  return (
    <form>
      <div className="container">
        <h2 className="login-title">- Inicia Sesion -</h2>
        <h6>
          Puedes hacer todo lo que necesitas en tu vida escolar. Revisa tus
          horarios, notas, eventos, trámites y más. De manera más fácil y
          sencilla.
        </h6>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="container"></div>
            <div className="input-group login-userinput">
              <input
                id="txtUser"
                type="text"
                className="form-control"
                name="username"
                placeholder="DNI"
              />
            </div>
            <div className="input-group">
              <input
                id="txtPassword"
                type="password"
                className="form-control"
                name="password"
                placeholder="Contraseña"
              />
            </div>
            <div>
              <label className="checkbox login-options">
                <input type="checkbox" /> Recordarme
              </label>
            </div>
            <button
              className="btn btn-primary btn-block login-button"
              type="submit"
              href="http://localhost:3000/menu"
            >
              Ingresar
            </button>
            <div>
            <h6>- Si eres un profesor<a href="http://localhost:3000/registroProfesor">
                      Seleccione Aqui
                    </a></h6>

            </div>
            <div>
              <p>
                No tienes una cuenta, entonces
                <butto
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Registrate
                </butto>
              </p>
              <a
                href="http://localhost:3000/cambiarContraseña"
                className="login-forgot"
              >
                Cambiar de Contraseña
              </a>
            </div>
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
                      Registro
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <h6>- Si eres un apoderado <a href="http://localhost:3000/registroApoderado">
                      Seleccione Aqui</a
                    ></h6>
                    <h6>- Si eres un profesor<a href="http://localhost:3000/registroProfesor">
                      Seleccione Aqui
                    </a></h6>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
