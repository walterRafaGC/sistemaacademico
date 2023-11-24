// Importa las bibliotecas necesarias de React
import React from 'react';
import "../css/sidebar.css" // Asegúrate de tener la versión de boxicons.min.css que necesitas

// Componente de la barra lateral
const Sidebar = () => {
  return (
    <nav className="sidebar locked">
      <div className="logo_items flex">
        <span className="nav_image">
          <img src="images/logo.png" alt="logo_img" />
        </span>
        <span className="logo_name">CodingNepal</span>
      </div>

      <div className="menu_container">
        <div className="menu_items">
          <ul className="menu_item">
            <div className="menu_title flex">
              <span className="title">Dashboard</span>
              <span className="line"></span>
            </div>
            <li className="item">
              <a href="#" className="link flex">
                <i className="bx bx-home-alt"></i>
                <span>Overview</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="link flex">
                <i className="bx bx-grid-alt"></i>
                <span>All Projects</span>
              </a>
            </li>
          </ul>

          <ul className="menu_item">
            <div className="menu_title flex">
              <span className="title">Editor</span>
              <span className="line"></span>
            </div>
            <li className="item">
              <a href="#" className="link flex">
                <i className="bx bxs-magic-wand"></i>
                <span>Magic Build</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="link flex">
                <i className="bx bx-folder"></i>
                <span>New Projects</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="link flex">
                <i className="bx bx-cloud-upload"></i>
                <span>Upload New</span>
              </a>
            </li>
          </ul>

          <ul className="menu_item">
            <div className="menu_title flex">
              <span className="title">Setting</span>
              <span className="line"></span>
            </div>
            <li className="item">
              <a href="#" className="link flex">
                <i className="bx bx-flag"></i>
                <span>Notice Board</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="link flex">
                <i className="bx bx-award"></i>
                <span>Award</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="link flex">
                <i className="bx bx-cog"></i>
                <span>Setting</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Componente de la barra de navegación superior
const Navbar = () => {
  return (
    <nav className="navbar flex">
      <i className="bx bx-menu" id="sidebar-open"></i>
      <input type="text" placeholder="Search..." className="search_box" />
      <span className="nav_image">
        <img src="images/profile.jpg" alt="logo_img" />
      </span>
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
