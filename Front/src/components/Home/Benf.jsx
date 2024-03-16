import { BiHotel, BiShower, BiRestaurant, BiCar, BiPhone, BiCheck } from 'react-icons/bi';

function Advanced() {
  return (
    <div id="advantages" className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">¿Por qué elegirnos?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="hover:scale-105 hover:shadow-xl bg-white p-4 rounded-lg shadow-md transition-transform">
          <div className="flex items-center mb-2">
            {/*Referencia 1 */}
            <BiHotel className="text-xl mr-2" />
            <h3 className="text-xl font-bold">Sistema de Reservas Online</h3>
          </div>
          <p className="text-gray-700">Nuestro sistema de reservas en línea le brinda comodidad y personalización durante su estadía</p>
        </div>
        <div className="hover:scale-105 hover:shadow-xl bg-white p-4 rounded-lg shadow-md transition-transform">
          <div className="flex items-center mb-2">
            {/*Referencia 2 */}
            <BiShower className="text-xl mr-2" />
            <h3 className="text-xl font-bold">Seguridad y Comodidad</h3>
          </div>
          <p className="text-gray-700">Enfocamos nuestra prioridad en su seguridad y comodidad. Cada habitación está equipada con un botón de llamada de emergencia, aire acondicionado y wifi gratuito.</p>
        </div>
        <div className="hover:scale-105 hover:shadow-xl bg-white p-4 rounded-lg shadow-md transition-transform">
          <div className="flex items-center mb-2">
            {/*Referencia 3 */}
            <BiRestaurant className="text-xl mr-2" />
            <h3 className="text-xl font-bold">Comida Deliciosa y Saludable</h3>
          </div>
          <p className="text-gray-700">Deléitese con nuestras opciones de desayuno saludables y deliciosas en el restaurante del hotel. Además, no pierda la oportunidad de explorar nuestra ciudad y descubrir su rica oferta culinaria</p>
        </div>
        <div className="hover:scale-105 hover:shadow-xl bg-white p-4 rounded-lg shadow-md transition-transform">
          <div className="flex items-center mb-2">
            {/*Referencia 4 */}
            <BiCar className="text-xl mr-2" />
            <h3 className="text-xl font-bold">Servicio de transporte de cortesía</h3>
          </div>
          <p className="text-gray-700">Explore las atracciones cercanas con nuestro servicio de transporte gratuito. Relájese y disfrute de sus vacaciones sin preocupaciones</p>
        </div>
        <div className="hover:scale-105 hover:shadow-xl bg-white p-4 rounded-lg shadow-md transition-transform">
          <div className="flex items-center mb-2">
            {/*Referencia 5*/}
            <BiPhone className="text-xl mr-2" />
            <h3 className="text-xl font-bold">Atención al cliente 24 horas al día, 7 días a la semana</h3>
          </div>
          <p className="text-gray-700">Estamos aquí para usted en todo momento. No dude en contactarnos con cualquier pregunta o inquietud. Su satisfacción es lo más importante para nosotros</p>
        </div>
        <div className="hover:scale-105 hover:shadow-xl bg-white p-4 rounded-lg shadow-md transition-transform">
          <div className="flex items-center mb-2">
            {/*Referencia 6 */}
            <BiCheck className="text-xl mr-2" />
            <h3 className="text-xl font-bold">Tarifas Accesible</h3>
          </div>
          <p className="text-gray-700">Disfrute de una experiencia excepcional con nuestras comodidades de primera clase. Aproveche al máximo su estancia y haga que cada momento cuente.</p>
        </div>
      </div>
    </div>
  );
};

export default Advanced;