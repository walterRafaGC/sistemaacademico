import "bootstrap/dist/css/bootstrap.min.css";

export default function Token() {
  return (
    <form>
      <div className="container">
        <h1>Cambio de Contraseña</h1>
        <label>
          Poner token el token de verificacion que se mando a su correo
          electronico
        </label>
        <input type="text" className="form-control" name="token_cambioContraseña" />
        <div className="mb-3">
          <label htmlFor="contraseñaApoderado" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            name="contraseñaApoderado"
          />
          <label htmlFor="contraseñaApoderado" className="form-label">
            Repetir Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            name="contraseñaApoderado"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar la Informacion
        </button>
      </div>
    </form>
  );
}
