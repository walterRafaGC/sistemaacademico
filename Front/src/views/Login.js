import "../css/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Login() {
  return (
    <form>
      <div class="container login-form">
        <h2 class="login-title">- Please Login -</h2>
        <div class="panel panel-default">
          <div class="panel-body">
            <form>
              <div class="input-group login-userinput">
                <span class="input-group-addon">
                  <span class="glyphicon glyphicon-user"></span>
                </span>
                <input
                  id="txtUser"
                  type="text"
                  class="form-control"
                  name="username"
                  placeholder="DNI"
                />
              </div>
              <div class="input-group">
                <span class="input-group-addon">
                  <span class="glyphicon glyphicon-lock"></span>
                </span>
                <input
                  id="txtPassword"
                  type="password"
                  class="form-control"
                  name="password"
                  placeholder="Contraseña"
                />
                <span id="showPassword" class="input-group-btn">
                  <button class="btn btn-default reveal" type="button">
                    <i class="glyphicon glyphicon-eye-open"></i>
                  </button>
                </span>
              </div>
              <button
                class="btn btn-primary btn-block login-button"
                type="submit"
              >
                <i class="fa fa-sign-in"></i> Ingresar
              </button>
              <div class="checkbox login-options">
                <label>
                  <input type="checkbox" /> Recordarme
                </label>
                <a href="#" class="login-forgot">
                  Cambiar de Contraseña
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </form>
  );
}
