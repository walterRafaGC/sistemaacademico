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
        </div>
      </div>
    </form>
  );
}
