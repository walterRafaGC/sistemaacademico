import "bootstrap/dist/css/bootstrap.min.css";
export default function RegistroProfesor() {
  return (
    <form>
      <div class="container">
        <h1>Registro del Profesor</h1>
        <h6>Rellenar todos los campos para un exitoso registro</h6>
        <hr></hr>
        <h6>Informacion del Apoderado y familiar</h6>
        <div class="mb-3">
          <label for="nombreProfesor" class="form-label">
            Nombre Completo:
          </label>
          <input type="text" class="form-control" name="nombreProfesor" />
        </div>
        <div class="mb-3">
          <label for="apellidoProfesor" class="form-label">
            Apellido Completo:
          </label>
          <input type="text" class="form-control" name="apellidoProfesor" />
        </div>
        <div class="mb-3">
          <label for="tipoDocumentoProfesor" class="form-label">
            Tipo de documento
          </label>
          <select class="form-select" name="tipoDocumentoProfesor">
            <option selected>Seleccione una opción</option>
            <option value="1">DNI</option>
            <option value="3">Pasaporte</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="codigoDocumentoProfesor" class="form-label">
            Codigo de documento:
          </label>
          <input
            type="number"
            class="form-control"
            name="codigoDocumentoProfesor"
          />
        </div>
        <div class="mb-3">
          <label for="telefonoProfesor" class="form-label">
            Numero de Telefono
          </label>
          <input type="number" class="form-control" name="telefonoProfesor" />
        </div>
        <div class="mb-3">
          <label for="direccionProfesor" class="form-label">
            Direccion de Domicilio
          </label>
          <input type="text" class="form-control" name="direccionProfesor" />
        </div>
        <div class="mb-3">
          <label for="correoProfesor" class="form-label">
            Correo Electronico
          </label>
          <input type="text" class="form-control" name="correoProfesor" />
        </div>
        <div class="mb-3">
          <label for="genero" class="form-label">
            Genero:
          </label>
          <select class="form-select" name="genero">
            <option selected>Seleccione una opción</option>
            <option value="1">Masculino</option>
            <option value="3">Femenino</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="nacionalidad" class="form-label">
            Nacionalidad
          </label>
          <input type="text" class="form-control" name="nacionalidad" />
        </div>
        <div class="mb-3">
          <label for="edad" class="form-label">
            Edad:
          </label>
          <input type="number" class="form-control" name="edad" />
        </div>
        <div class="mb-3">
          <label for="fecha_nacimiento" class="form-label">
            Fecha de Nacimiento:
          </label>
          <input type="date" class="form-control" name="fecha_nacimiento" />
        </div>
        <div class="mb-3">
          <label for="direccion" class="form-label">
            Direccion de Domicilio:
          </label>
          <input type="text" class="form-control" name="direccion" />
        </div>
        <div class="mb-3">
          <label for="religion" class="form-label">
            Religion:
          </label>
          <input type="text" class="form-control" name="religion" />
        </div>
        <div class="mb-3">
          <label for="gradoAcademico" class="form-label">
            Grado Academico Anterior:
          </label>
          <input type="text" class="form-control" name="gradoAcademico" />
        </div>
        <div class="mb-3">
          <label for="formFileMultiple" class="form-label">
            Documentacion y/o Certificado de estudio
          </label>
          <input
            class="form-control"
            type="file"
            id="formFileMultiple"
            multiple
          />
        </div>
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
