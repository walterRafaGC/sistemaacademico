import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./views/Login";
import CambiarContrasena from "./views/CambiarContraseña";
import Menu from "./views/Menu";
import RegistroAlumno from "./views/RegistroAlumno";
import RegistroApoderado from "./views/RegistroApoderado";
import RegistroProfesor from "./views/RegistroProfesor";
import Token from "./views/Token";
import RegistroAdministracion from "./views/RegistroAdministracion";
import ListaAdministracion from "./views/ListaAdministracion";
import ListaProfesor from "./views/ListaProfesor";
import Horario from "./views/Horario";
import RegistroNotas from "./views/RegistroNotas";
import AsistenciaAlumno from "./views/RegistroAsistenciaAlumno";
import AsistenciaProfesor from './views/RegistroAsistenciaProfesor';
import Paga from "./views/Paga";
import HistorialNotas from './views/HistorialNotas';
import Chat from './views/pruebaChat';
import Prueba from './views/prueba';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/prueba",
    element: <Prueba />,
    },
  {
    path: "/cambiarContraseña",
    element: <CambiarContrasena />,
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
  {
    path: "/registroAdministracion",
    element: <RegistroAdministracion />,
  },
  {
    path: "/listaProfesor",
    element: <ListaProfesor />,
  },
  {
    path: "/listaAdministracion",
    element: <ListaAdministracion />,
  },
  {
    path: "/registroNota",
    element: <RegistroNotas />,
  },
  {
    path: "/horario",
    element: <Horario />,
  },
  {
    path: "/notas",
    element: <RegistroNotas />,
  },
  {
    path: "/asistenciaAlumno",
    element: <AsistenciaAlumno />,
  },
  {
    path: "/asistenciaProfesor",
    element: <AsistenciaProfesor />,
  },
  {
    path:"/paga",
    element:<Paga />,
  },
  {
    path: "/historialNotas",
    element: <HistorialNotas />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
