import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiHeartLine, RiHeartFill, RiStarFill, RiStarHalfLine, RiStarLine } from "react-icons/ri";

const Room = () => {
  const [rooms, setRooms] = useState([]);

  const toggleLiked = (index) => {
    setRooms(prevRooms => prevRooms.map((room, i) => i === index ? { ...room, liked: !room.liked } : room))
  }

  const searchRooms = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_URL_ROOMS);
      const data = await res.json();
      setRooms(data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  useEffect(() => {
    searchRooms();
  }, []);

  return (
    <>
      <div className="p-9 text-center">
        <h2 className="text-2xl font-bold">Promoción de Habitaciones</h2>
        <p>¡Descubre nuestras increíbles habitaciones y reserva ahora!</p>
      </div>
      {rooms &&
        rooms.map((room, index) => (
          <div key={index}>
            <div className="p-9">
              <div className="max-w-sm xl:max-w-screen-lg xl:h-80 mx-auto bg-white shadow-lg xl:flex rounded-lg overflow-hidden mb-4">
                <img
                  className="w-full max-h-80 xl:flex-1"
                  src={room.image}
                  alt={room.type}
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
                  <h2 className="text-xl font-semibold mb-2">{room.type}</h2>
                  <p className="text-gray-700">{room.description}</p>
                  <div className="mt-4">
                    <p className="text-gray-600">Amenities:</p>
                    <ul className="list-disc list-inside text-gray-700">
                      {room.amenities.map((amenity, i) => (
                        <li key={i}>{amenity}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex mt-4">
                    <div className="flex-1">
                      <p className="text-gray-600">
                        Rate: ${room.rate} per night
                      </p>
                      <p className="text-gray-600">Review: {room.review}</p>
                      <div className="flex items-center">
                        <p className="text-gray-600">Rating: 
                          {[...Array(5)].map((_, i) => (
                            <button
                              key={i}
                              className="focus:outline-none"
                              onClick={() => handleRating(i + 1)}
                            >
                              {i < room.rating ? (
                                <RiStarFill className="text-yellow-500" />
                              ) : (
                                <RiStarLine />
                              )}
                            </button>
                          ))}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 items-end justify-end">
                      <Link
                        className="bg-marron text-white rounded-md font-bold py-2 px-4"
                        to={"/"}
                      >
                        Reservar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div >
        ))}
    </>
  );
};

export default Room;
