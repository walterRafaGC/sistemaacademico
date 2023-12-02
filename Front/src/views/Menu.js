import "bootstrap/dist/css/bootstrap.min.css";
import SlidingMenu from './sidebar';
import "../css/margen-menu.css";

const Menu =()=> {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <SlidingMenu />
        </div>
        <div className="col-md-9"></div>
    <form className="custom-form1">
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
    </div>
  );
}

export default Menu;