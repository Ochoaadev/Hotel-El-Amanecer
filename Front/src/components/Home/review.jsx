import React, { useState, useEffect } from 'react';
import {useAuth} from '../../contexts/AuthProvider'
import { VscAccount } from "react-icons/vsc";
import StarRating from '../Modal/StartRating'

const Reseñas = () => {
  const { user } = useAuth();
  const [reseñas, setReseñas] = useState([]);
  const [reseña, setReseña] = useState('');
  const [rating, setRating] = useState(null);

  useEffect(() => {
    obtenerReseñas();
  }, []);

  const obtenerReseñas = async () => {
    const res = await fetch(import.meta.env.VITE_URL_REVIEWS);
    const data = await res.json();
    setReseñas(data);
  };

  const agregarReseña = async () => {
    const res = await fetch(import.meta.env.VITE_URL_ADDREVIEWS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: user.Username,
        review: reseña,
        rating: rating,
      }),
    });
    if (res.status === 201) {
      obtenerReseñas();
      setReseña('');
      setRating(null);
    } else {
      console.log('No se pudo agregar la reseña');
    }
  };

  const eliminarReseña = async (id) => {
    const res = await fetch(${import.meta.env.VITE_URL_REVIEWS}/${id}, {
      method: 'DELETE',
    });
    if (res.status === 200) {
      obtenerReseñas();
    } else {
      console.log('No se pudo eliminar la reseña');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {user && (
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-4">¿Como fue tu estancia en el hotel?</h2>
          <textarea
            className="block w-full p-2 mb-4 border border-gray-950 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Escribe tu reseña aquí..."
            value={reseña}
            onChange={(e) => setReseña(e.target.value)}
          />
            <StarRating rating={rating} setRating={setRating} />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full mt-2"
            onClick={agregarReseña}
          >
            Enviar Reseña
          </button>
        </div>
      )}
      <h2 className="text-2xl font-bold mb-4">¡Algunas opiniones de nuestros clientes!</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
      {reseñas.map((reseña) => (
        <div key={reseña._id} className='hover:scale-105 hover:shadow-xl bg-white p-4 rounded-lg shadow-md transition-transform'>
          <div className='flex items-center mr-7'>
            <VscAccount className="text-xl mr-2"/>
              <h4 className="text-2xl font-bold"> {reseña.username}</h4>
          </div>
              <p className="text-gray-700">{reseña.review}</p>
              <p><StarRating rating={reseña.rating} /></p>
              {user && user.Rol === "Admin" && (
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md w-full mt-4"
                  onClick={() => eliminarReseña(reseña._id)}
                >
                  Eliminar Reseña
                </button>
              )}
        </div>
      ))}
      </div>
    </div>
  );
};

export default Reseñas;
