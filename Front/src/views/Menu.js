import "bootstrap/dist/css/bootstrap.min.css";
export default function Menu() {
  return (
    <form>
      <div className="container">
        <h1>Menu Principal</h1>
        <div>
          <a
            href="http://localhost:3000/registroAlumno"
            className="btn btn-secondary"
            role="button"
          >
            Registro de los alumnos
          </a>
        </div>
        <br></br>
        <div>
          <a
            href="http://localhost:3000/registroAdministracion"
            className="btn btn-secondary"
            role="button"
          >
            Registro del Personal Administrativo
          </a>
        </div>
        <br></br>
        <div>
          <a
            href="http://localhost:3000/listaProfesor"
            className="btn btn-secondary"
            role="button"
          >
            Lista de Profesores
          </a>
        </div> <br></br>
        <div>
          <a
            href="http://localhost:3000/listaAdministracion"
            className="btn btn-secondary"
            role="button"
          >
            Lista del Personal Administrativo
          </a>
        </div> <br></br>
        <div>
          <a
            href="http://localhost:3000/registroNota"
            className="btn btn-secondary"
            role="button"
          >
            Registro de Notas
          </a>
        </div> <br></br>
        <div>
          <a
            href="http://localhost:3000/horario"
            className="btn btn-secondary"
            role="button"
          >
            Creacion de Horario
          </a>
        </div> <br></br>
        <div>
          <a
            href="http://localhost:3000/asistenciaAlumno"
            className="btn btn-secondary"
            role="button"
          >
            Asistencia Alumno
          </a>
        </div> <br></br>
        <div>
          <a
            href="http://localhost:3000/asistenciaProfesor"
            className="btn btn-secondary"
            role="button"
          >
            Asistencia Docente
          </a>
        </div><br></br>
        <div>
          <a
            href="http://localhost:3000/paga"
            className="btn btn-secondary"
            role="button"
          >
            Paga
          </a>
        </div>
      </div>
    </form>
  );
}
