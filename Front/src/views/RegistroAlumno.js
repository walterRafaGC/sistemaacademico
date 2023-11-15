import "bootstrap/dist/css/bootstrap.min.css";
export default function RegistroAlumno() {
  return (
    <form>
      <div className="container">
        <h1>Registro del Alumno</h1>
        <h6>Rellenar todos los campos para un exitoso registro</h6>
        <div className="mb-3">
          <label htmlFor="nombreAlumno" className="form-label">
            Nombre Completo del Alumno:
          </label>
          <input type="text" className="form-control" name="nombreAlumn" />
        </div>
        <div className="mb-3">
          <label htmlFor="apellidoAlumno" className="form-label">
            Apellido Completo del Alumno:
          </label>
          <input type="text" className="form-control" name="apellidoAlumno" />
        </div>
        <div className="mb-3">
          <label htmlFor="tipoDocumentoAlumno" className="form-label">
            Tipo de documento
          </label>
          <select className="form-select" name="tipoDocumentoAlumno">
            <option defaultValue value="" disabled>
              Seleccione una opción
            </option>
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
          <label htmlFor="codigoEstudianteAlumno" className="form-label">
            Codigo de Estudiante(PUM):
          </label>
          <input
            type="number"
            className="form-control"
            name="codigoEstudianteAlumno"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar la Informacion
        </button>
      </div>
    </form>
  );
}
