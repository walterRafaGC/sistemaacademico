import "bootstrap/dist/css/bootstrap.min.css";
export default function CambiarContraseña() {
  return (
    <form>
      <div className="container">
        <h1>Cambiar Contraseña</h1>
        <div className="mb-3">
          <label htmlFor="tipoDocumentoAlumno" className="form-label">
            Tipo de documento
          </label>
          <select className="form-select" name="tipoDocumentoAlumno">
            <option defaultValue>Seleccione una opción</option>
            <option value="DNI">DNI</option>
            <option value="Pasaporte">Pasaporte</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="codigoDocumentoAlumno" className="form-label">
            Codigo de documento:
          </label>
          <input
            type="number"
            className="form-control"
            name="codigoDocumentoAlumno"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="codigoDocumentoAlumno" className="form-label">
            Correo Electronico:
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Verificacion de datos
          </button>
        </div>
      </div>
    </form>
  );
}
