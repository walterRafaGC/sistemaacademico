import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState, useEffect} from "react";
import axios from "axios";
const ApiConsumer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://pietrogm.pythonanywhere.com/services/list-personal-administrativo/")
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
        <h1>Lista del Personal Administrativo</h1>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Cargo</th>
              <th>Departamento</th>
              <th>Telefono</th>
              <th>Correo</th>
              <th>Fecha de Ingreso</th>
              <th>Salario</th>
            </tr>
          </thead>
          <tbody>
          {data.map((item)=>(
            <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.nombre}</td>
            <td>{item.tipo_cargo}</td>
            <td>{item.departamento_area}</td>
            <td>{item.numero_telefono}</td>
            <td>{item.email}</td>
            <td>{item.fecha_inicio_empleo}</td>
            <td>{item.salario}</td>
          </tr>
        ))}
          </tbody>
        </table>
      </div>
    </form>
  );
}

export default ApiConsumer;
