import "bootstrap/dist/css/bootstrap.min.css";
import SlidingMenu from './sidebar';

const Menu =()=> {

  return (
    <div className="container">
       <SlidingMenu />
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
            href="http://localhost:3000/paga"
            className="btn btn-secondary"
            role="button"
          >
            Paga
          </a>
        </div>
      </div>
    </form>
    </div>
  );
}

export default Menu;