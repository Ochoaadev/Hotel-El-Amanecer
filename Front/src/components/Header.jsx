import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseFill } from 'react-icons/ri';
import { useState } from "react";
import LogoSVG from './Icon/logo';
import { useAuth } from '../contexts/AuthProvider';

function Header() {

  const {user, isAuthenticated, logout} = useAuth();

  const handleLogout = ()=>{
    logout()
  }
  const [showMenu, SetshowMenu] = useState(false);

  return (
    <>
      <header className="bg-oscuro flex items-center justify-center xl:justify-between w-full py-4 px-8 h-[14vh] z-50">
        <div className="w-3/4 md:w-2/3 xl:w-1/2 text-start">
          <Link className="text-2xl sm:text-3xl md:text-5xl lg:text-4xl flex items-center justify-center xl:justify-start gap-2 font-bold p-1 xl:px-6 text-white" to={"/"}>
            <LogoSVG
              height={'10vh'}
              width={'2rem'}
              fill={'white'}
            />
            <h1>El Amanecer</h1>
          </Link>
        </div>
        <nav className={`fixed bg-oscuro w-4/5 md:w-2/5 h-full ${showMenu ? "left-0" : "-left-full"}
             top-0 xl:static flex-1 flex flex-col xl:flex-row items-center gap-10 justify-center transition-all duration-500 z-50`}
        >
          <Link className="font-bold text-blanco" to={"/"}>Inicio </Link>        
          <Link className="font-bold text-blanco" to={"/AboutUs"}>Sobre Nosotros </Link>
          <Link className="font-bold text-blanco" to={"/Reservas"}>Realizar una reserva </Link>
          {(location.pathname === "/" || location.pathname === "/Listar_Reservas" || location.pathname === "/Home"  || location.pathname === "/Habitaciones") && user && user.Rol == "Admin" ? (
                <>
              <Link className="font-bold text-blanco" to={"/Servicios"}>Servicios </Link>
                </>
                ) : null}
          
          {isAuthenticated ? (
                        <button onClick={handleLogout} className="bg-marron text-blanco rounded-lg xl:rounded-xl border border-transparent hover:bg-crema hover:text-oscuro hover:border-crema py-2 px-4 font-bold text-center transition-all duration-300 ease-in-out transform">Cerrar sesión</button>
                    ) : (
                      <div className="flex justify-center flex-col xl:flex-row gap-6 xl:gap-3">
                      <Link className="bg-white text-oscuro rounded-lg xl:rounded-xl border border-transparent hover:bg-oscuro hover:text-claro hover:border-claro py-2 px-4 font-bold text-center transition-all duration-300 ease-in-out transform" to={"/Login"}>Iniciar Sesión</Link>
                      <Link className="bg-marron text-blanco rounded-lg xl:rounded-xl border border-transparent hover:bg-crema hover:text-oscuro hover:border-crema py-2 px-4 font-bold text-center transition-all duration-300 ease-in-out transform" to={"/Registro"}>Registrarse</Link>
                    </div>
                    )}
        </nav>
        <button onClick={() => SetshowMenu(!showMenu)} className={`xl:hidden text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-2 transition-all duration-300 ease-in-out transform ${showMenu ? 'rotate-180' : 'rotate-0'}`}>
          {showMenu
            ?
            <RiCloseFill
              className='text-blanco'
            />
            :
            <RiMenu3Line
              className='text-blanco'
            />}
        </button>
      </header>
    </>
  );
}

export default Header