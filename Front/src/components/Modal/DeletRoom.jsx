import React, { useState } from 'react'; 
import axios from 'axios'; 
import { useItemsContext } from '../../contexts/UpProvider';

const Delete = ({ habitacionId }) => { 
    
    const [isOpen, setIsOpen] = useState(false);
    const { HabitacionIdToEdit } = useItemsContext

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleDelete = async () => {
        try {
            const res = await axios.delete(`http://localhost:4000/rooms/${habitacionId._id}`);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <button onClick={openModal} className="flex items-center justify-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">Eliminar Habitacion</button>
            {isOpen && (
                // Modal para confirmar eliminación
                <div className="fixed inset-0 z-10 overflow-y-auto bg-gray-500 bg-opacity-75">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="bg-white p-6 rounded-lg w-96">
                            <h3 className="text-lg font-bold mb-4">Confirmar Eliminación</h3>
                            <p>¿Estás seguro de que quieres eliminar esta habitación?</p>
                            <div className="flex justify-center">
                                <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Confirmar Eliminar</button>
                                <button onClick={closeModal} className="ml-4 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Delete;