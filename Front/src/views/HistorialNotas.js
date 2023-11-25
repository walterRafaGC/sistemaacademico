import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SlidingMenu from "./sidebar";

const HistorialNotas = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [filtroNombre, setFiltroNombre] = useState("");
  const [alumnosFiltrados, setAlumnosFiltrados] = useState([]);

  useEffect(() => {
    // Realizar la solicitud a la API para obtener los datos de la tabla de alumnos
    fetch("http://localhost:8080/api/alumno")
      .then((response) => response.json())
      .then((data) => {
        setAlumnos(data); // Establecer los datos de los alumnos en el estado
        setAlumnosFiltrados(data); // Establecer los datos filtrados inicialmente con todos los alumnos
      })
      .catch((error) => {
        console.error("Error al obtener datos de la API:", error);
      });
  }, []); // El segundo parámetro del useEffect es un array vacío para asegurar que se ejecute solo una vez al montar el componente

  const handleInputChange = (e) => {
    const filtro = e.target.value;
    setFiltroNombre(filtro);
    filtrarAlumnos(filtro);
  };

  const filtrarAlumnos = (filtro) => {
    const alumnosFiltrados = alumnos.filter((alumno) =>
      alumno.nombre.toLowerCase().includes(filtro.toLowerCase())
    );
    setAlumnosFiltrados(alumnosFiltrados);
  };

  return (
    <div>
      <SlidingMenu />
      <div className="container mt-5">
        <h1>Historial de Notas</h1>
        <div className="mb-3">
          <label htmlFor="buscarInput" className="form-label">
            Buscar por nombre:
          </label>
          <input
            type="text"
            className="form-control"
            id="buscarInput"
            value={filtroNombre}
            onChange={handleInputChange}
          />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Nota</th>
            </tr>
          </thead>
          <tbody>
            {alumnosFiltrados.map((alumno, index) => (
              <tr key={index}>
                <td>{alumno.nombre}</td>
                <td>{alumno.nota}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistorialNotas;
