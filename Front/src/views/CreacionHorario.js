import "bootstrap/dist/css/bootstrap.min.css";

export default function CreacionHorario() {
  return (
    <from>
      <div className="container">
        <h1>Creacion de Horario</h1>
        <div class="mb-3">
          <label for="seccion" class="form-label">
            Escribir la Seccion
          </label>
          <input type="text" class="form-control" name="seccion" />
        </div>
      </div>
    </from>
  );
}
