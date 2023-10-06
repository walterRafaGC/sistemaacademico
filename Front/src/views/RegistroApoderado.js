import "bootstrap/dist/css/bootstrap.min.css";
export default function RegistroApoderado(){
    return (
        <form>
          <div class="container">
            <h1>Registro del Apoderado</h1>
            <h6>Rellenar todos los campos para un exitoso registro</h6>
            <div class="mb-3">
              <label for="nombre" class="form-label">
                Nombre Completo del Alumno:
              </label>
              <input type="email" class="form-control" name="nombre" />
            </div>
            <div class="mb-3">
              <label>Apellido Completo del Alumno:</label>
              <input type="text" class="form-control" name="apellido" />
            </div>
            <div class="mb-3">
              <label>Tipo de documento</label>
              <select class="form-select" name="tipoDocumento">
                <option selected>Seleccione una opción</option>
                <option value="1">DNI</option>
                <option value="3">Pasaporte</option>
              </select>
            </div>
            <div class="mb-3">
              <label>Codigo de documento:</label>
              <input type="number" class="form-control" name="codigoDocuemento" />
            </div>
            <div class="mb-3">
              <label>Codigo de Estudiante(PUM):</label>
              <input type="number" class="form-control" name="codigoEstudiante" />
            </div>
            <button type="submit" class="btn btn-primary">
              Guardar la Informacion
            </button>
          </div>
        </form>
      );
}