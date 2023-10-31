import "bootstrap/dist/css/bootstrap.min.css";
export default function ListaAdministracion() {
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

          </tbody>
        </table>
      </div>
    </form>
  );
}
