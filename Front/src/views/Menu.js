import "bootstrap/dist/css/bootstrap.min.css";
export default function Menu() {
  return (
    <form>
      <div class="container">
        <h1>Menu Principal</h1>
        <div>
          <a
            href="http://localhost:3000/registroAlumno"
            class="btn btn-secondary"
            role="button"
          >
            Registro de los alumnos
          </a>
        </div>
        <br></br>
        <div>
          <a
            href="http://localhost:3000/registroAdministracion"
            class="btn btn-secondary"
            role="button"
          >
            Registro del Personal Administrativo
          </a>
        </div>
        <br></br>
        <div>
          <a
            href="http://localhost:3000/listaProfesor"
            class="btn btn-secondary"
            role="button"
          >
            Lista de Profesores
          </a>
        </div> <br></br>
        <div>
          <a
            href="http://localhost:3000/listaAdministracion"
            class="btn btn-secondary"
            role="button"
          >
            Lista del Personal Administrativo
          </a>
        </div> <br></br>
        <div>
          <a
            href="http://localhost:3000/registroNota"
            class="btn btn-secondary"
            role="button"
          >
            Registro de Notas
          </a>
        </div> <br></br>
        <div>
          <a
            href="http://localhost:3000/horario"
            class="btn btn-secondary"
            role="button"
          >
            Creacion de Horario
          </a>
        </div> <br></br>
        <div>
          <a
            href="http://localhost:3000/asistenciaAlumno"
            class="btn btn-secondary"
            role="button"
          >
            Asistencia Alumno
          </a>
        </div> <br></br>
        <div>
          <a
            href="http://localhost:3000/asistenciaProfesor"
            class="btn btn-secondary"
            role="button"
          >
            Asistencia Docente
          </a>
        </div>
      </div>
    </form>
  );
}
