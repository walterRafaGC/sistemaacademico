import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const Paga = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Crear token con la tarjeta
    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      console.error(error);
      setPaymentError(error.message);
    } else {
      // Enviar el token al servidor para procesar el pago
      enviarTokenAlServidor(token);
    }
  };

  const enviarTokenAlServidor = (token) => {
    // Aquí debes enviar el token al servidor para procesar el pago
    // Puedes usar fetch u otra librería para hacer la solicitud al servidor
    // Ejemplo: fetch("/ruta-del-servidor", { method: "POST", body: { token: token.id } });
    console.log("Token enviado al servidor:", token);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="cardElement" className="form-label">
          Tarjeta de crédito
        </label>
        <CardElement id="cardElement" />
      </div>
      {paymentError && (
        <div className="alert alert-danger" role="alert">
          Error: {paymentError}
        </div>
      )}
      <button type="submit" className="btn btn-primary">
        Pagar
      </button>
    </form>
  );
};

export default Paga;