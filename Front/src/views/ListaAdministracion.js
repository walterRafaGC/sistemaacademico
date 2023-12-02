import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState, useEffect} from "react";
import axios from "axios";
import SlidingMenu from './sidebar';
import "../css/margen-list-Administrador.css";

const ApiConsumer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/personalAdministrativo/")
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log("API Data",response.data);
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
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <SlidingMenu />
        </div>
        <div className="col-md-9"></div>
    <form className="custom-form6">
      <div className="container">
        <h1>Lista del Personal Administrativo</h1>
        <table className="table table-hover">
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
            <td>{item.id_PersonalAdministrativo}</td>
            <td>{item.nombres_PersonalAdminis}</td>
            <td>{item.puesto_Cargo}</td>
            <td>{item.departamento_Area}</td>
            <td>{item.numero_Telefono}</td>
            <td>{item.email}</td>
            <td>{item.fecha_Inicio_Empleo}</td>
            <td>{item.salario}</td>
          </tr>
        ))}
          </tbody>
        </table>
      </div>
    </form>
    </div>
    </div>
  );
}

export default ApiConsumer;
