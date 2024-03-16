import { createBrowserRouter } from "react-router-dom";
import Form_reservas from "./pages/Reserva/Formulario_Reservas";
import About from "./pages/AboutUs/AboutUs";
import Service from "./pages/Services/services";
import App from "./App";
import InicioSs from './pages/Login/Logeo'
import Registro from './pages/Register/Registro'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/formulario_reservas',
    element: <Form_reservas />
  },
  {
    path: '/AboutUs',
    element: <About />
  },
  {
    path: '/services',
    element: <Service />
  },
  {
    path: '/Login',
    element: <InicioSs />
  },
  {
    path: '/Registro',
    element: <Registro />
  }
])