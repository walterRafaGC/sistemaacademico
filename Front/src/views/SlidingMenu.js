import React from 'react';
import "../css/SlidingMenu.css"; // Estilos del menú (puedes personalizar según tus necesidades)

export default function SlidingMenu({ onClose }) {
  return (
      <div className="sliding-menu">
        {/* Contenido del menú */}
        <ul>
        <li><a href="http://localhost:3000/menu"><span>Principal</span></a></li>
                <li><a href="http://localhost:3000/registroAlumno"><span>Registro de Alumno</span></a></li>
                <li><a href="http://localhost:3000/registroAdministracion"><span>Registro del Personal Administrativo</span></a></li>
                <li><a href="http://localhost:3000/listaProfesor"><span>Lista de Profesores</span></a></li>
                <li><a href="http://localhost:3000/listaAdministracion"><span>Lista del Personal Administrativo </span></a></li>
                <li><a href="http://localhost:3000/registroNota"><span>Registro de Notas</span></a></li>
                <li><a href="http://localhost:3000/historialNotas"><span>Historial de Notas</span></a></li>
                <li><a href="http://localhost:3000/horario"><span>Creacion de Horario</span></a></li>
                <li><a href="http://localhost:3000/paga"><span>paga</span></a></li>

        </ul>
        <button onClick={onClose} className="close-btn">
        Close Menu
      </button>
    </div>
  );
};
