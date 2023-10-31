import "bootstrap/dist/css/bootstrap.min.css";

export default function ListaProfesor() {
  return (
    <form>
      <div className="container">
        <h1>Lista de Profesores</h1>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Numero de Documento</th>
              <th>Correo</th>
              <th>Telefono</th>
              <th>Asignatura</th>
              <th>Horario de Clase</th>
              <th>Fecha de Ingreso</th>
              <th>Titulo Academico</th>
              <th>Experiencia Laboral</th>
              <th>Calificaciones</th>
              <th>Estado Laboral</th>
              <th>Imagen del Profesor</th>
              <th>Supervisor</th>
              <th>Observaciones</th>
              <th>Documentacion</th>
              <th>Salario</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </form>
  );
}
