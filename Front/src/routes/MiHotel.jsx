import Header from "../components/Header"
import Info from '../components/Info'
import Advanced from '../components/Benf'
import Footer from '../components/Footer'
import Carrusel from '../components/carrusel'
import { useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

function MiHotel() {
  const location = useLocation();
  const { user } = useAuth();
  return (
    <>
      <Header />
      <Info />
      <Advanced />
      <Carrusel />
      <Footer />
    </>
  );
}

export default MiHotel;
