import "bootstrap/dist/css/bootstrap.min.css";

export default function Token() {
  return (
    <form>
      <div class="container">
        <h1>Cambio de Contraseña</h1>
        <label>
          Poner token el token de verificacion que se mando a su correo
          electronico
        </label>
        <input type="text" class="form-control" name="token_cambioContraseña" />
        <div class="mb-3">
          <label for="contraseñaApoderado" class="form-label">
            Contraseña
          </label>
          <input
            type="password"
            class="form-control"
            name="contraseñaApoderado"
          />
          <label for="contraseñaApoderado" class="form-label">
            Repetir Contraseña
          </label>
          <input
            type="password"
            class="form-control"
            name="contraseñaApoderado"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Guardar la Informacion
        </button>
      </div>
    </form>
  );
}
