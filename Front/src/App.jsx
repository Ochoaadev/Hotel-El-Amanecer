import About from './components/AboutUs'
import Service from './components/services'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpProvider from "./contexts/UpProvider";
import { AuthProvider, useAuth } from "./contexts/AuthProvider";
import Home from "./routes/MiHotel"
import FormularioReservas from "./routes/Formulario_Reservas";
// import Room from './routes/Room';

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
              <Route path="/Reservas" element={<FormularioReservas />} />
            </Routes>
          </UpProvider>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;