// Importa las bibliotecas necesarias de React
import React from "react";
import "../css/sidebar.css"; // Asegúrate de tener la versión de boxicons.min.css que necesitas

// Componente de la barra lateral
const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="menu_content">
        <ul className="menu_items">
          <div className="menu_title menu_dahsboard"></div>
          <li className="item">
            <a href="http://localhost:3000/registroAlumno" className="nav_link">
              <span className="navlink_icon">
                <i className="bx bxs-magic-wand"></i>
              </span>
              <span className="navlink">Menu</span>
            </a>
          </li>
          <li className="item">
            <a href="http://localhost:3000/horario" className="nav_link">
              <span className="navlink_icon">
                <i className="bx bx-grid-alt"></i>
              </span>
              <span className="navlink">Creacion de Horario</span>
            </a>
          </li>
        </ul>

        <ul className="menu_items">
          <div className="menu_title menu_editor"></div>
          <li className="item">
            <a href="http://localhost:3000/registroAlumno" className="nav_link">
              <span className="navlink_icon">
                <i className="bx bxs-magic-wand"></i>
              </span>
              <span className="navlink">Registro de Alumnos</span>
            </a>
          </li>
          <li className="item">
            <a
              href="http://localhost:3000/registroAdministracion"
              className="nav_link"
            ><span className="navlink_icon">
              <i className="bx bxs-magic-wand"></i></span>
              <span class="navlink">Registro del Personal Administrativo</span>
            </a>
          </li>
        </ul>
        <ul className="menu_items">
          <div className="menu_title menu_setting"></div>
          <li className="item">
            <a href="http://localhost:3000/listaProfesor" className="nav_link">
              <i className="bx bxs-magic-wand"></i>
              <span class="navlink">Lista de Profesores</span>
            </a>
          </li>
          <li className="item">
            <a
              href="http://localhost:3000/listaAdministracion"
              className="nav_link"
            >
              <i className="bx bxs-magic-wand"></i>
              <span class="navlink">Lista del Personal Administrativo</span>
            </a>
          </li>
        </ul>
        <ul className="menu_items">
          <div className="menu_title menu_notas"></div>
          <li className="item">
            <a href="http://localhost:3000/registroNota" className="nav_link">
              <i className="bx bxs-magic-wand"></i>
              <span class="navlink">Registro de Notas</span>
            </a>
          </li>
          <li className="item">
            <a
              href="http://localhost:3000//historialNotas"
              className="nav_link"
            >
              <i className="bx bxs-magic-wand"></i>
              <span class="navlink">Historial de Notas</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// Componente de la barra de navegación superior
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo_item">
        <i className="bx bx-menu" id="sidebarOpen"></i>
        <img src="images/logo.png" alt=""></img>High School Junior
      </div>

      <div class="search_bar">
        <input type="text" placeholder="Search" />
      </div>

      <div className="navbar_content">
        <i className="bi bi-grid"></i>
        <i className="bx bx-sun" id="darkLight"></i>
        <i className="bx bx-bell"></i>
        <img src="images/profile.jpg" alt="" className="profile" />
      </div>
    </nav>
  );
};

// Componente principal que renderiza la barra lateral y la barra de navegación
const App = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
    </div>
  );
};

export default App;
