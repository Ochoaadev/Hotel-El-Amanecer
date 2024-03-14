import { useNavigate } from 'react-router-dom';
import { RiMenu3Line, RiCloseFill } from 'react-icons/ri';
import { useState } from "react";
import Logo from '../assets/logotipo.png';

function Header() {

  const navigate = useNavigate();
  const handleOpenForm = () => {

    navigate("/Reservas");
  };
  const handleOpenHome = () => {
    navigate("/");
  };
  const handleOpenAbutUs = () => {
    navigate("/AboutUs");
  };
  const handleOpenservices = () => {
    navigate("/Servicios");
  };
  const handleLogin = () =>{
    navigate("/Login")
}

const handleRegister = () =>{
    navigate("/Registro")
}

  const [showMenu, SetshowMenu] = useState(false);

  const [menu, setMenu] = useState(false);

  return (
    <>
      <header className="bg-oscuro flex items-center justify-center xl:justify-start w-full py-4 px-8 h-[14vh] z-50">
        <div className="w-3/4 md:w-2/3 xl:w-1/5 text-center">
          <button className="text-2xl font-bold p-1 sm:p-3 md:p-6" onClick={handleOpenHome}>
            <img src={Logo} alt="El amanecer" />
          </button>
        </div>
        <nav className={`fixed bg-oscuro w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"}
             top-0 xl:static flex-1 flex flex-col xl:flex-row items-center gap-10 justify-center transition-all duration-500 z-50 mr-[10rem]`}
        >
          <button className="font-bold text-blanco" onClick={handleOpenHome}>Inicio </button>
          <button className="font-bold text-blanco" onClick={handleOpenAbutUs}>Sobre Nosotros </button>
          <button className="font-bold text-blanco" onClick={handleOpenservices}>Servicios </button>
          <button className="font-bold text-blanco" onClick={handleLogin}>Iniciar Sesión </button>
          <button className="font-bold text-blanco" onClick={handleRegister}>Registrarse </button>
        </nav>
        <button onClick={() => SetshowMenu(!showMenu)} className="xl:hidden text-2xl p-2">
          {showMenu ? <RiCloseFill /> : <RiMenu3Line />}
        </button>
      </header>
    </>
  );
}

export default Header