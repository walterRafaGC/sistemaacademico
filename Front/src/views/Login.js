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
            <div className="container"> </div>
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
              <p>
                No tienes una cuenta, entonces 
                <button
                  type="text"
                  className="btn btn-primary"
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
                className="login-forgot"
              >
                Cambiar de Contraseña
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="registro"
        tabindex="-1"
        aria-labelledby="registro"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Regitro de la plataforma
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="modal-body">
                <h6>Seleccione su rol para el comienzo del regitro</h6>
                <div>
                  <button type="button" className="btn btn-secondary">
                    Apoderado
                  </button>
                </div>
                <div>
                  <button type="button" className="btn btn-primary">
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
