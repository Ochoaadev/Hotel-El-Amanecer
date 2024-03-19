import { RiLoader4Fill } from 'react-icons/ri'
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-[80vh] mx-auto">
      <motion.div
        className="flex flex-col gap-3 items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <RiLoader4Fill className='animate-spin text-6xl' />
        <p className='font-bold text-2xl'>Cargando...</p>
      </motion.div>
    </div>
  );
}

export default Loader;