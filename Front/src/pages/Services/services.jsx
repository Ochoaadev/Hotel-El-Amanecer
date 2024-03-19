import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

function Service() {
  return (
    <>
      <Header />
      <div id="services">
        <motion.h1
          className='text-2xl font-bold mt-1 flex items-center justify-center'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Servicios Disponibles
        </motion.h1>
        {/* Servicio 1 */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-8'>
          <motion.div
            className='flex flex-col gap-8 mr-20'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.img
              src="../src/assets/services/Servicio1.jpeg"
              className='w-full rounded-3xl object-cover h-56'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
            <div>
              <motion.h3
                className="text-xl font-bold flex items-center justify-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Contamos con las mejores habitaciones, y al mejor precio!
              </motion.h3>
            </div>
          </motion.div>
          {/* Servicio 2 */}
          <motion.div
            className='flex flex-col gap-2 mr-20'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.img
              src="../src/assets/services/Servicio2.jpeg"
              className='w-full rounded-3xl object-cover h-56'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
            <div>
              <motion.h3
                className="text-xl font-bold flex items-center justify-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              >
                Acércate al Restaurante Gourmet
              </motion.h3>
              <motion.p
                className='flex items-center justify-center'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              >
                Nuestro Restaurante ofrece deliciosos platos de la cocina andina e internacional
              </motion.p>
            </div>
          </motion.div>
          {/* Servicio 3 */}
          <motion.div
            className='flex flex-col gap-2 mr-20'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <motion.img
              src="../src/assets/services/Servicio3.jpeg"
              className='w-full rounded-3xl object-cover h-56'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            />
            <div>
              <motion.h3
                className="text-xl font-bold flex items-center justify-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.8 }}
              >
                Conoce nuestro Spa y centro de bienestar
              </motion.h3>
              <motion.p
                className='flex items-center justify-center'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4, duration: 0.8 }}
              >
                Relájate y rejuvenece con nuestros tratamientos de Spa y servicios de masajes, que los encontrarás a partir de $15
              </motion.p>
            </div>
          </motion.div>
          {/* Servicio 4 */}
          <motion.div
            className='flex flex-col gap-2 mr-20'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.8 }}
          >
            <motion.img
              src="../src/assets/services/Servicio4.jpeg"
              className='w-full rounded-3xl object-cover h-56'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 0.8 }}
            />
            <div>
              <motion.h3
                className="text-xl font-bold flex items-center justify-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 0.8 }}
              >
                Aprovecha nuestra promoción!
              </motion.h3>
              <motion.p
                className='flex items-center justify-center'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.2, duration: 0.8 }}
              >
                Reserva 3 noches, y recibe la 4ta totalmente gratis!(Valido Hasta el 1 de mayo)
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Service;