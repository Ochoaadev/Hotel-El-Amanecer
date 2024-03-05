import Message from "./Message";
import { Modal, Button, ModalHeader, ModalBody, ModalFooter  } from "./Modal";
import { useItemsContext } from "../../contexts/UpProvider";
import { useEffect, useState } from "react";
import emailjs from 'emailjs-com';

function Edit_Reserva() {
  const {
    openEdit_reserva,   
    handleOpenEdit_reserva,
    reservaIdToEdit
 } = useItemsContext();
   const { setMessage, setStatus, handleOpenMessage } = useItemsContext();

  const [inputmotivo, setinputmotivo] = useState();

  const handlemotivo = (event) => {
    setinputmotivo(event.target.value);
 }
  const focusOnFirstEmptyInput = () => {
  
   return false;
 };
 const Editar = async (e) => {
  e.preventDefault(); // Evita que la página se recargue
  const Status = document.getElementById('status').value;
  const Data_Json = {
     "Status":  Status,
     "Motivo":  inputmotivo
  };
  const url = `http://localhost:4000/Edit_Reservas/${reservaIdToEdit._id}`;
  const response = await fetch(url, {
     method: "PUT",
     headers: {
        'Content-Type': 'application/json'
     },
     body: JSON.stringify(Data_Json),
  });
  const data = await response.json();
  await setMessage(data.message);
  await setStatus(data.status);
  await handleOpenMessage();
  handleOpenEdit_reserva(); // Cierra el modal después de guardar

  // Enviar correo
  const emailData = {
    to_email: reservaIdToEdit.Email,
    to_name: 'Hotel El Dorado de Los Andes',
    from_name: 'Yetzenia Mendoza',
    message: `La reserva ha sido actualizada. Estado: ${Status}. Motivo: ${inputmotivo}`,
    reply_to: 'yetzeniam7@gmail.com'
  };
  emailjs.send('service_qaxid4r', 'template_k3s73qg', emailData, 'UFxBRXh-Ejc7o4j7E')
    .then((result) => {
        console.log('Correo enviado exitosamente:', result.text);
    }, (error) => {
        console.log('Error al enviar el correo:', error.text);
    });
};
  
   return (
      <>
        <Message />
        {/* Modal */}
        <Modal open={openEdit_reserva} handleOpen={handleOpenEdit_reserva}>
          {/* Cabecera del modal */}
          <ModalHeader>Editar un Artículo</ModalHeader>
          {/* Cuerpo del Modal */}
          <ModalBody>
            <form
              className="flex-col flex px-4 justify-center items-center"
              onSubmit={async (e) => {
                Editar(e);
              }}
              id="form_edit"
              encType="multipart/form-data"
            >
             <div className="mb-4 w-full">
               <label htmlFor="status">Estado:</label>
               <select id="status" name="status">
                 <option value="Aprobado">Aprobado</option>
                 <option value="Rechazado">Rechazado</option>
               </select>
              </div>
              <div className="mb-4 w-full">
                <textarea name="motivo" id="" cols="30" rows="10"
                className="border border-black"
                    placeholder="Escribe el motivo de rechazo o aprobacion para enviar en el email"
                  value={inputmotivo}
                  onChange={handlemotivo}
                ></textarea>
              </div>
           
              
              
            </form>
          </ModalBody>
          {/* Footer del Nodal */}
          <ModalFooter>
          <Button onClick={handleOpenEdit_reserva}>Cancelar</Button>
            <button
              className="flex items-center text-center bg-dark-tangerine dark:bg-gray/50 dark:hover:text-dark-tangerine dark:hover:bg-gray dark:border-woodsmoke justify-center h-10 px-4 mx-2 rounded-lg hover:bg-pizazz focus:bg-blaze-orange dark:focus:bg-woodsmoke border-b-4 border-blaze-orange ssm:w-20 ssm:h-8 ssm:px-0 ssm:my-1 text-white font-bold"
              onClick={(e) => {
                Editar(e);
              }}
            >
              Guardar
            </button>
          </ModalFooter>
        </Modal>
    
    </>
  );
}
export default Edit_Reserva;
