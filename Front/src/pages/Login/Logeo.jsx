import { useState, useEffect } from 'react';
import Message from "../../components/Modal/Message";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";
import { useItemsContext, useUpItemsContext } from "../../contexts/UpProvider";
import { motion } from 'framer-motion';

const InicioSs = () => {

  const { setMessage, setStatus, handleOpenMessage } = useItemsContext();

  //Actualización de estados de Sección
  const update = useUpItemsContext();
  const navigate = useNavigate();
  const { signin, isAuthenticated } = useAuth();

  //Comprobación de la existencia de un token
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token != "" && isAuthenticated) {
      navigate("/Home");
    }
  }, [isAuthenticated]);

  // Estableciendo los estados de los datos
  const [Username, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  // Inputs sin contenidos
  const focusOnFirstEmptyInput = () => {
    if (Username == "") {
      document.getElementById("username").focus();
      setErrorMessage("Por favor, ingrese su nombre de usuario.");
      return true;
    }

    if (Password == "") {
      document.getElementById("password").focus();
      setErrorMessage("Por favor, ingrese su contraseña.");
      return true;
    }

    setErrorMessage("");
    return false;
  };

  //Función de Inicio de Sección
  const handleSubmit = async (e) => {

    e.preventDefault();
    const alert = await focusOnFirstEmptyInput();
    if (alert === true) {
      return;
    }

    const data_login = {
       Username,
       Password,
    };

    //Solicitud al backend
    const response = await signin(data_login);

    //Respuestas de la solicitud
    if (response.data.status != 200) {
      await setMessage(response.data.message);
      await setStatus(response.data.status);
      await handleOpenMessage();
    }
    navigate(response.ruta);

  }

  return (
    <>
      <Message />
      <Header />
      <div className="w-full max-w-5xl flex justify-center items-center m-auto mt-20 mb-28">
        <motion.div
          className="bg-crema shadow-md rounded px-8 pt-6 pb-8 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-center text-2xl mb-5">
            Iniciar Sesión
          </h1>
          <motion.form
            onSubmit={handleSubmit}
            className='bg-crema'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <label className="block text-oscuro text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-oscuro leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={Username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-oscuro text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-oscuro mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="*********"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                onClick={(e) => {
                  handleSubmit(e)
                  update(true);
                }}
                className="bg-oscuro border border-transparent hover:border-oscuro hover:bg-gradient-to-br hover:from-crema hover:to-marron text-white hover:text-oscuro font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Entrar
              </button>
              <Link className="bg-oscuro border border-transparent hover:border-oscuro hover:bg-gradient-to-br hover:from-crema hover:to-marron text-white hover:text-oscuro font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" to="/Registro">
                Registrarse
              </Link>
            </div>
          </motion.form>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default InicioSs;