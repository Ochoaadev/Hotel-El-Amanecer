import React, { useState } from 'react';
import axios from 'axios';
import { useItemsContext } from '../../contexts/UpProvider';

const Edit = ( { habitacionId }) => {
const [Tipo, setTipo] = useState(habitacionId.Tipo);
  const [Descripcion, setDescripcion] = useState(habitacionId.Descripcion);
  const [Comodidad, setComodidad] = useState(habitacionId.Comodidad);
  const [image, setImage] = useState(habitacionId.imagen);
  const [Tarifa, setTarifa] = useState(habitacionId.Tarifa);
  const [Review, setReview] = useState(habitacionId.Review);
  const [isOpen, setIsOpen] = useState(false);

    const{
        HabitacionIdToEdit
    } = useItemsContext

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', image);
        formData.append('Tipo', Tipo);
        formData.append('Descripcion', Descripcion);
        formData.append('Comodidad', Comodidad);
        formData.append('Tarifa', Tarifa);
        formData.append('Review', Review);

        try {
            const res = await axios.put(`http://localhost:4000//rooms/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                Editar Habitacion
            </button>
            {isOpen && (
                <div className="fixed inset-0 z-10 overflow-y-auto bg-gray-500 bg-opacity-75">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="bg-white p-6 rounded-lg w-96">
                            <h3 className="text-lg font-bold mb-4">Editar Habitación</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input type="text" placeholder="Tipo" value={Tipo} onChange={(e) => setTipo(e.target.value)} className="w-full p-2 border rounded" />
                                <input type="text" placeholder="Descripcion" value={Descripcion} onChange={(e) => setDescripcion(e.target.value)} className="w-full p-2 border rounded" />
                                <input type="text" placeholder="Comodidad" value={Comodidad} onChange={(e) => setComodidad(e.target.value)} className="w-full p-2 border rounded" />
                                <input type="file" onChange={(e) => setImage(e.target.files[0])} className="w-full p-2 border rounded" />
                                <input type="text" placeholder="Tarifa" value={Tarifa} onChange={(e) => setTarifa(e.target.value)} className="w-full p-2 border rounded" />
                                <input type="text" placeholder="Review" value={Review} onChange={(e) => setReview(e.target.value)} className="w-full p-2 border rounded" />
                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center">Editar</button>
                            </form>
                            <button onClick={closeModal} className="mt-4 text-blue-500 hover:underline flex items-center justify-center">Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Edit