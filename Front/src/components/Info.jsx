import { RiRoadMapLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

function Info() {
  return (
    <motion.section
      id="home"
      className="bg-blanco min-h-[90vh] grid grid-cols-1 xl:grid-cols-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Informacion */}
      <motion.div
        className="md:col-span-5 flex items-center justify-center p-16"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="flex flex-col gap-8 text-center">
          <motion.h1
            className="text-6xl grid font-bold md:text-6xl loading-[6,5rem]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Bienvenido al hotel
            <span className="text-marron py-2 px-6">El Amanecer</span>{" "}
          </motion.h1>
          <motion.p
            className="font-bold text-black text-xl md:text-2xl leading-[3rem]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Sumérgete en nuestras instalaciones acogedoras y cómodas para disfrutar de una experiencia excepcional e inolvidable
          </motion.p>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.button
              className="bg-marron text-white py-2 px-6 font-bold rounded-xl text-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center">
                <span>Ubicado en Carrera 6 entre calles 15 y 16, sector centro, frente a la clínica del doctor Plata, San Cristóbal,</span>
                <RiRoadMapLine className="ml-2" />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
      {/* Imagen */}
      <motion.div
        className="md:col-span-3 flex items-center justify-center relative"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.img
          src="../src/assets/fachada.jpg"
          className="w-full h-auto object-cover p-6 md:pr-6 md:w-auto md:h-auto md:object-cover rounded-4xl"
          alt="Hotel"
        />
      </motion.div>
    </motion.section>
  );
}

export default Info;
