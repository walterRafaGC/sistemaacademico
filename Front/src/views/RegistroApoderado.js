import "bootstrap/dist/css/bootstrap.min.css";
export default function RegistroApoderado() {
  return (
    <form>
      <div class="container">
        <h1>Registro del Apoderado</h1>
        <h6>Rellenar todos los campos para un exitoso registro</h6>
        <hr></hr>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck1" />
          <label class="form-check-label" for="gridCheck1">
            El apoderado es diferente a los padres
          </label>
        </div>
        <br />
        <h6>Informacion del Apoderado y familiar</h6>
        <div>
          <div class="mb-3">
            <label for="nombreApoderado" class="form-label">
              Nombre Completo del Apoderado:
            </label>
            <input type="text" class="form-control" name="nombreApoderado" />
          </div>
          <div class="mb-3">
            <label for="apellidoApoderado" class="form-label">
              Apellido Completo del Apoderado:
            </label>
            <input type="text" class="form-control" name="apellidoApoderado" />
          </div>
          <div class="mb-3">
            <label for="tipoDocumentoApoderado" class="form-label">
              Tipo de documento
            </label>
            <select class="form-select" name="tipoDocumentoApoderado">
              <option selected>Seleccione una opción</option>
              <option value="1">DNI</option>
              <option value="3">Pasaporte</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="codigoDocumentoApoderado" class="form-label">
              Codigo de documento:
            </label>
            <input
              type="number"
              class="form-control"
              name="codigoDocumentoApoderado"
            />
          </div >
          <div class="mb-3">
            <label for="telefonoApoderado" class="form-label">Numero de Telefono</label>
            <input type="number" class="form-control" name="telefonoApoderado" />
          </div>
          <div class="mb-3">
            <label for="direccionApoderado" class="form-label">Direccion de Domicilio</label>
            <input type="text" class="form-control" name="direccionApoderado"/>
          </div>
          <div class="mb-3">
            <label for="correoApoderado" class="form-label">Correo Electronico
            </label>
            <input type="text" class="form-control" name="correoApoderado" />
          </div>
        </div>
        <hr></hr>
        <h6>Informacion del alumno registrado en la institucion</h6>
        <div>
          <div class="mb-3">
            <label for="colegioProcedencia" class="form-label">
              Colegio de Procedencia
            </label>
            <input type="text" class="form-control" name="colegioProcedencia" />
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
        </div>
        <hr></hr>
        <h6>Informacion del alumno</h6>
        <div>
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
            <label for="habilidadesCompetitivas" class="form-label">
              Habilidades Competitivas
            </label>
            <input
              type="text"
              class="form-control"
              name="habilidadesCompetitivas"
            />
          </div>
          <div class="mb-3">
            <label for="sangre" class="form-label">
              Tipo de Sangre:
            </label>
            <input type="text" class="form-control" name="tipoSangre" />
          </div>
          <div class="mb-3">
            <label for="alergias" class="form-label">
              Alergias:
            </label>
            <textarea class="form-control" rows="2"></textarea>
          </div>
          <div class="mb-3">
            <label for="enfermedadesHereditarias" class="form-label">
              Antecedentes de Enfermedades Hereditarias
            </label>
            <textarea class="form-control" rows="2"></textarea>
          </div>
          <div class="mb-3">
            <label for="enfermedadesCronicas" class="form-label">
              Historial de Enfermedades Cronicas
            </label>
            <textarea class="form-control" rows="2"></textarea>
          </div>
          <div class="mb-3">
          <label for="contraseñaApoderado" class="form-label">Contraseña</label>
          <input type="password" class="form-control" name="contraseñaApoderado"/>
          <label for="contraseñaApoderado" class="form-label">Repetir Contraseña</label>
          <input type="password" class="form-control" name="contraseñaApoderado"/>
          </div>
          <button type="submit" class="btn btn-primary">
            Guardar la Informacion
          </button>
        </div>
      </div>
    </form>
  );
}
