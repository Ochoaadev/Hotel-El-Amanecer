import {useState, useEffect} from "react";
import Message from "../../components/Modal/Message";
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import { useLocation } from "react-router";
import { useItemsContext, useUpItemsContext } from "../../contexts/UpProvider";

function Form_reservas (){
   const { setMessage, setStatus, handleOpenMessage } = useItemsContext();
   const update = useUpItemsContext();

   const location = useLocation();
   const roomData = location.state?.roomData;

   const [InputDNI, SetInputDNI ] = useState();
   const [InputNombre_Apellido, SetInputNombre_Apellido ] = useState();
   const [InputEmail, SetInputEmail ] = useState();
   const [InputTelefono, SetInputTelefono] = useState();
   const [InputFecha_llegada, SetInputFecha_llegada ] = useState();
   const [InputFecha_Salida, SetInputFecha_Salida ] = useState();
   const [InputCantidad_Persona, SetInputCantidad_Persona] = useState();
   const [InputHabitacion, SetInputHabitacion] = useState(roomData?.Tipo || '');
   const [InputPregunta, SetInputPregunta ] = useState();
   
   const handleInputDNI = (event) => {
      SetInputDNI(event.target.value);
      
   }
   const handleInputNombre_Apellido = (event) => {
      SetInputNombre_Apellido(event.target.value);
      console.log(SetInputNombre_Apellido)
   }
   const handleInputEmail = (event) => {
      SetInputEmail(event.target.value);
   }
   const handleInputTelefono= (event) => {
      SetInputTelefono(event.target.value);
   }
   const handleInputFecha_llegada= (event) => {
      SetInputFecha_llegada(event.target.value);
   }
   const handleInputFecha_Salida = (event) => {
      SetInputFecha_Salida(event.target.value);
   }
   const handleInputCantidad_Persona = (event) => {
      SetInputCantidad_Persona(event.target.value);
   }
   const handleInputHabitacion = (event) => {
      SetInputHabitacion(event.target.value);
   }
   const handleInputPregunta = (event) => {
      SetInputPregunta(event.target.value);
   }

   const focusOnFirstEmptyInput = () => {
      if (!InputNombre_Apellido) {
        return document.getElementById('InputNombre_Apellido');
      }
      return null;
    }

const Add_Reservas = async (event) => {
  event.preventDefault();
  const alert = await focusOnFirstEmptyInput();

  const Data_Json = {
    "DNI": Number(InputDNI),
    "Nombre_Apellido": InputNombre_Apellido,
    "Email": InputEmail,
    "Telefono": Number(InputTelefono),
    "Fecha_llegada": InputFecha_llegada,
    "Fecha_Salida": InputFecha_Salida,
    "Cantidad_Persona": Number(InputCantidad_Persona),
    "Comentarios": InputPregunta
  };

  if (alert !== null) {
    alert.focus();
    return;
  }

  const response = await fetch(import.meta.env.VITE_URL_RESERVAS, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Data_Json),
  });

  const data = await response.json();
  await setMessage(data.message);
  await setStatus(data.status);
  await handleOpenMessage();
};

  return (
    <>
      <Message />
      <Header />

      <div className=" w-full max-w-5xl flex justify-center items-center m-auto mt-10">
        <form action="form_reservas" className="bg-claro shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-center text-2xl mb-5 font-bold">Reserva con nosotros!</h1>
          <div className="flex flex-col ">
            <label htmlFor="Cedula" className="mb-2">
              DNI
              <input
                className="rounded-lg border border-black w-full"
                type="text"
                id="Cedula"
                value={InputDNI}
                onChange={handleInputDNI}
              />
            </label>
          </div>
          <div className="flex flex-col ">
            <label htmlFor="name" className="mb-2">
              Nombre Completo
              <input
                className="rounded-lg border border-black w-full"
                type="text"
                id="name"
                value={InputNombre_Apellido}
                onChange={handleInputNombre_Apellido}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-4">
              Email
              <input
                className="rounded-lg border border-black w-full"
                type="email"
                id="email"
                value={InputEmail}
                onChange={handleInputEmail}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label htmlFor="telefono" className="mb-4">Telefono
              <input
                className="rounded-lg border border-black w-full"
                type="telefono"
                id="telefono"
                value={InputTelefono}
                onChange={handleInputTelefono}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label htmlFor="PrimeraN" className="mb-4">Primera noche de Estancia
              <input
                className="rounded-lg border border-black w-full"
                type="date"
                id="PrimeraN"
                value={InputFecha_llegada}
                onChange={handleInputFecha_llegada}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label htmlFor="UltimaN" className="mb-4">Ultima noche de Estancia
              <input
                className="rounded-lg border border-black w-full"
                type="date"
                id="UltimaN"
                value={InputFecha_Salida}
                onChange={handleInputFecha_Salida}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label htmlFor="CargaF" className="mb-4">Número de personas
              <input
                className="rounded-lg border border-black w-full"
                type="number"
                id="CargaF"
                value={InputCantidad_Persona}
                onChange={handleInputCantidad_Persona}
              />
            </label>
          </div>
          <div className="flex flex-col ">
            <label htmlFor="room" className="mb-2">
              Tipo de Habitacion
              <input
                className="rounded-lg border border-black w-full"
                type="text"
                id="room"
                value={InputHabitacion}
                onChange={handleInputHabitacion}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label htmlFor="Pregunta">¿Como nos conociste?
              <textarea
                className="rounded-lg border border-black w-full"
                type="text"
                id="Pregunta"
                value={InputPregunta}
                onChange={handleInputPregunta}
              />
            </label>
          </div>
          <button
            onClick={(event) => {
              Add_Reservas(event);
            }}
            className="bg-oscuro hover:bg-bg-AzulO-400 text-blanco font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Realizar reserva
          </button>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Form_reservas;
