import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from "axios";

export default function RegistroApoderado() {
  const [formData, setFormData] = useState({
    diferentePadres: false,
    nombreApoderado: "",
    apellidoApoderado: "",
    tipoDocumentoApoderado: "",
    codigoDocumentoApoderado: "",
    telefonoApoderado: "",
    direccionApoderado: "",
    correoApoderado: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace "API_ENDPOINT" with your actual API endpoint
      const response = await axios.post("API", formData);
      console.log("Data successfully submitted:", response.data);

      // Optionally, reset the form after successful submission
      setFormData({
        diferentePadres: false,
        nombreApoderado: "",
        apellidoApoderado: "",
        tipoDocumentoApoderado: "",
        codigoDocumentoApoderado: "",
        telefonoApoderado: "",
        direccionApoderado: "",
        correoApoderado: "",
      });
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h1>Registro del Apoderado</h1>
        <h6>Rellenar todos los campos para un exitoso registro</h6>
        <hr></hr>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck1" name="diferentePadres"
            checked={formData.diferentePadres}
            onChange={handleInputChange}/>
          <label className="form-check-label" htmlFor="gridCheck1">
            El apoderado es diferente a los padres
          </label>
        </div>
        <br />
        {formData.diferentePadres && (
          <label className="form-check-label" htmlFor="gridCheck1">
          Mensaje: El apoderado es diferente a los padres.
        </label>
        )}
        <h6>Informacion del Apoderado y familiar</h6>
        <div>
          <div className="mb-3">
            <label htmlFor="nombreApoderado" className="form-label">
              Nombre Completo del Apoderado:
            </label>
            <input type="text" className="form-control" name="nombreApoderado" value={formData.nombreApoderado} onChange={handleInputChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="apellidoApoderado" className="form-label">
              Apellido Completo del Apoderado:
            </label>
            <input type="text" className="form-control" name="apellidoApoderado" value={formData.apellidoApoderado} onChange={handleInputChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="tipoDocumentoApoderado" className="form-label">
              Tipo de documento
            </label>
            <select className="form-select" name="tipoDocumentoApoderado">
              <option defaultValue>Seleccione una opción</option>
              <option value="DNI">DNI</option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="codigoDocumentoApoderado" className="form-label">
              Codigo de documento:
            </label>
            <input
              type="number"
              className="form-control"
              name="codigoDocumentoApoderado"
              value={formData.codigoDocumentoApoderado} onChange={handleInputChange}
            />
          </div >
          <div className="mb-3">
            <label htmlFor="telefonoApoderado" className="form-label">Numero de Telefono</label>
            <input type="number" className="form-control" name="telefonoApoderado" value={formData.telefonoApoderado} onChange={handleInputChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="direccionApoderado" className="form-label">Direccion de Domicilio</label>
            <input type="text" className="form-control" name="direccionApoderado" value={formData.direccionApoderado} onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="correoApoderado" className="form-label">Correo Electronico
            </label>
            <input type="text" className="form-control" name="correoApoderado" value={formData.correoApoderado}
            onChange={handleInputChange} />
          </div>
        </div>
        <hr></hr>
        <button type="submit" className="btn btn-primary">
            Guardar la Informacion
          </button>
      </div>
    </form>
  );
}
