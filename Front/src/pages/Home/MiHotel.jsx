import Header from "../../components/Header"
import Info from '../../components/Home/Info'
import Advanced from '../../components/Home/Benf'
import Footer from '../../components/Footer'
import Carrusel from '../../components/Home/carrusel'
import { useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";
import Reseñas from "../../components/Home/review"
import Weather from "../../components/Home/time"

function MiHotel() {
  const location = useLocation();
  const { user } = useAuth();
  return (
    <>
      <Header />
      <Info />
      <Advanced />
      <Carrusel />
      <Reseñas/>
      <Weather/>
      <Footer />
    </>
  );
}

export default MiHotel;
