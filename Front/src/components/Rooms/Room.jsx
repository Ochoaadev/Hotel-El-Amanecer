import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RiHeartLine, RiHeartFill, RiStarFill, RiStarHalfLine, RiStarLine } from "react-icons/ri";
import Loader from "../Loader";
import Search from "./Search";

const Room = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const URL_API = import.meta.env.VITE_URL_ROOMS;

  const searchRooms = async (value) => {
    try {
      const res = await fetch(`${URL_API}${value ? selectedFilter.length ? '/' + selectedFilter + '/' + value : '/Tipo/' + value : ''}`);
      const data = await res.json();
      setRooms(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  // Función para manejar el cambio de filtro
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    searchRooms(filter); // Llama a la función de búsqueda con el filtro seleccionado
  };

  const toggleLiked = (index) => {
    setRooms(prevRooms => prevRooms.map((room, i) => i === index ? { ...room, liked: !room.liked } : room))
  }

  const handleRating = (ratingValue, index) => {
    setRooms(prevRooms => prevRooms.map((room, i) => i === index ? { ...room, rating: ratingValue } : room))
  }

  useEffect(() => {
    searchRooms();
  }, []);

  useEffect(() => {
    setLoading(true);
    searchRooms(searchValue);
  }, [searchValue])

  return (
    <>
      <div className="p-9 text-center">
        <div className="flex flex-col gap-2 mb-9">
          <h2 className="text-2xl font-bold">Promoción de Habitaciones</h2>
          <p>¡Descubre nuestras increíbles habitaciones y reserva ahora!</p>
        </div>
        <Search
          setSearchValue={setSearchValue}
          onFilterChange={handleFilterChange} // Pasar la función de cambio de filtro al componente de búsqueda
        />
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {rooms &&
            rooms.map((room, index) => (
              <div key={index}>
                <motion.div
                  className="p-9"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="max-w-sm md:max-w-screen-md xl:max-w-screen-xl xl:h-80 mx-auto bg-white shadow-lg xl:flex rounded-lg overflow-hidden mb-4">
                    <img
                      className="w-full max-h-80 xl:flex-1"
                      src={room.imagen}
                      alt={room.Tipo}
                    />
                    <div className="py-4 px-6 xl:flex-1 flex flex-col my-auto justify-between">
                      <div className="relative">
                        <button
                          className={`absolute text-2xl float top-0 right-0 z-10 ${room.liked ? 'text-red-500' : 'text-black'} transform transition duration-300 ease-in-out`}
                          onClick={() => toggleLiked(index)}
                        >
                          {room.liked ? <RiHeartFill /> : <RiHeartLine />}
                        </button>
                      </div>
                      <h2 className="text-xl font-semibold mb-2">{room.Tipo}</h2>
                      <p className="text-gray-700">{room.Descripcion}</p>
                      <div className="mt-4">
                        <p className="text-gray-600">Comodidades:</p>
                        <ul className="list-disc list-inside text-gray-700">
                          {room.Comodidad.map((amenity, i) => (
                            <li key={i}>{amenity}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex mt-4">
                        <div className="flex-1">
                          <p className="text-gray-600">
                            Tarifa: ${room.Tarifa} por noche
                          </p>
                          <p className="text-gray-600">Review: {room.Review}</p>
                          <div className="flex items-center">
                            <p className="text-gray-600">Rating:
                              {[...Array(5)].map((_, i) => {
                                const starValue = i + 1;
                                let starIcon = <RiStarLine />;

                                if (starValue <= room.Evaluacion) {
                                  starIcon = <RiStarFill className="text-yellow-500" />;
                                } else if (starValue - 0.5 === room.Evaluacion) {
                                  starIcon = <RiStarHalfLine className="text-yellow-500" />;
                                }

                                return (
                                  <button
                                    key={i}
                                    className="focus:outline-none"
                                    onClick={() => handleRating(starValue, index)}
                                  >
                                    {starIcon}
                                  </button>
                                );
                              })}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-1 items-end justify-end">
                          <Link
                            className="bg-marron text-white rounded-md font-bold py-2 px-4"
                            to={{
                              pathname: "/Reservas",
                              state: { roomData: room }
                            }}
                          >
                            Reservar
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div >
            ))}
        </>
      )}
    </>
  );
};

export default Room;
