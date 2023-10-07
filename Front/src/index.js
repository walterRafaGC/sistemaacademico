import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./views/Login";
import CambiarContraseña from "./views/CambiarContraseña";
import Menu from "./views/Menu";
import RegistroAlumno from "./views/RegistroAlumno";
import RegistroApoderado from "./views/RegistroApoderado";
import RegistroProfesor from "./views/RegistroProfesor";
import Token from "./views/Token";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/cambiarContraseña",
    element: <CambiarContraseña />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/registroAlumno",
    element: <RegistroAlumno />,
  },
  {
    path: "/registroApoderado",
    element: <RegistroApoderado />,
  },
  {
    path: "/registroProfesor",
    element: <RegistroProfesor />,
  },
  {
    path: "/token",
    element: <Token />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
