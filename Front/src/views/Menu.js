import "bootstrap/dist/css/bootstrap.min.css";
import SlidingMenu from "./sidebar";
import "../css/margen-menu.css";

const Menu = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <SlidingMenu />
        </div>
        <div className="col-md-9">
          <form className="custom-form1">
            <div className="container">
              <h1>Menu Principal</h1>
              <br></br>
              <div>
                <a
                  href="http://localhost:3000/paga"
                  className="btn btn-secondary"
                  role="button"
                >
                  Paga
                </a>
                <div>
                  <a
                    href="http://localhost:3000/chat"
                    className="btn btn-secondary"
                    role="button"
                  >
                    Prueba Chat Bot
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Menu;
