import "bootstrap/dist/css/bootstrap.min.css";
export default function CambiarContraseña() {
  return (
    <form>
      <div class="container">
        <h1>Cambiar Contraseña</h1>
        <div class="mb-3">
          <label for="tipoDocumentoAlumno" class="form-label">
            Tipo de documento
          </label>
          <select class="form-select" name="tipoDocumentoAlumno">
            <option selected>Seleccione una opción</option>
            <option value="1">DNI</option>
            <option value="3">Pasaporte</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="codigoDocumentoAlumno" class="form-label">
            Codigo de documento:
          </label>
          <input
            type="number"
            class="form-control"
            name="codigoDocumentoAlumno"
          />
        </div>
        <div class="mb-3">
          <label for="codigoDocumentoAlumno" class="form-label">
            Correo Electronico:
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <button type="submit" class="btn btn-primary">
            Verificacion de datos
          </button>
        </div>
      </div>
    </form>
  );
}
