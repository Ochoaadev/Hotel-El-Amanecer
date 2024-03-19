import About from './pages/AboutUs/AboutUs'
import Service from './pages/Services/services'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpProvider from "./contexts/UpProvider";
import { AuthProvider, useAuth } from "./contexts/AuthProvider";
import Home from "./pages/Home/MiHotel"
import FormularioReservas from "./pages/Reserva/Formulario_Reservas";
import InicioSs from "./pages/Login/Logeo"
import Registro from "./pages/Register/Registro"
import Rooms from './pages/Rooms/Rooms';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <UpProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/AboutUs" element={<About />} />
              <Route path="/Servicios" element={<Service/>} />
              <Route path="/Rooms" element={<Rooms/>} />
              <Route path="/Reservas" element={<FormularioReservas />} />
              <Route path="/Login" element={<InicioSs />} />
              <Route path="/Registro" element={<Registro />} />
            </Routes>
          </UpProvider>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;