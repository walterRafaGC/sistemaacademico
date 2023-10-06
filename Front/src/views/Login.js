import "../css/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Login() {
  return (
    <form>
      <div class="container">
        <h2 class="login-title">- Please Login -</h2>
        <h6>Puedes hacer todo lo que necesitas en tu vida escolar. Revisa tus horarios, notas, eventos, trámites y más. De manera más fácil y sencilla.</h6>
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
                <h6>
                  No tienes una cuenta, entonces
                </h6>
                <a href="http://localhost:3000/registroApoderado">Registrate aqui</a>
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
    </form>
  );
}
