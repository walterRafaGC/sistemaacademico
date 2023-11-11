import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState, useEffect} from "react";
import axios from "axios";
const ApiConsumer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/profesor/")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Fallo en la coneccion de la API", error);
        setLoading(false);
      });
  }, []);

  if(loading) {
    return <p>Cargando........</p>;
  }

  return (
    <form>
      <div className="container">
        <h1>Lista de Profesores</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Numero de Documento</th>
              <th>Correo</th>
              <th>Telefono</th>
              <th>Titulo Academico</th>
              <th>Experiencia Laboral</th>
              <th>Calificaciones</th>
            </tr>
          </thead>
          <tbody>
          {data.map((item)=>(
              <tr key={item.id}>
                <td>{item.id_profesor}</td>
                <td>{item.nombre_profesor}</td>
                <td>{item.dni_profesor}</td>
                <td>{item.correo_profesor}</td>
                <td>{item.telefono_profesor}</td>
                <td>{item.grado_academico_profesor}</td>
                <td>{item.cv_profesor}</td>
                <td>{item.certificado_profesor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </form>
  );
}

export default ApiConsumer;
