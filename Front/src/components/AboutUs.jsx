import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion'

function About() {
  return (
    <>
      <Header />
      <motion.div
        id="aboutUs"
        className="p-8  xl:p-15 bg-claro"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
      >
        <div className='mb-4'>
          <motion.h1
            className="text-[40px] font-bold mb-5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            ¿Quienes Somos?
          </motion.h1>
          <motion.p
            className="text-xl text-black-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            "El Amanecer" se nutre de las profundas raíces históricas de la región andina de San Cristóbal, Venezuela.
          </motion.p>
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
          <motion.div
            className='flex flex-col gap-8 mt-20'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.img
              src="../src/assets/Sobrenosotros1.jpeg"
              className="w-full object-cover rounded-3xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
            <motion.p
              className='text-black text-justify font-bold'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Donde los rayos del sol se despiertan con la promesa de un nuevo día, se alza majestuoso El Amanecer, un hotel que lleva su nombre con orgullo. Sus paredes de adobe y tejas rojas se funden con la tierra, como si hubieran nacido de la misma montaña que los rodea.
            </motion.p>
            <motion.p
              className='text-justify text-black font-bold'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              A lo largo de los años, hemos mantenido nuestro compromiso con la comodidad, la calidad y la atención personalizada, ofreciendo a nuestros huéspedes una experiencia inolvidable en un entorno mágico.
            </motion.p>
            <motion.p
              className='text-justify text-black font-bold'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              Así que, si alguna vez te encuentras en San Cristóbal, no dudes en visitar El Amanecer. Quizás encuentres algo más que un lugar para descansar; quizás encuentres un pedacito de magia en cada amanecer.
            </motion.p>
          </motion.div>
          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 gap-4'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            {/* Contenido secundario 1 */}
            <motion.div
              className='flex flex-col gap-8 mr-20'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <motion.img
                src="../src/assets/Sobrenosotros2.jpeg"
                className='w-full rounded-3xl object-cover h-56'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
              />
              <motion.p
                className="text-black text-justify"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.8 }}
              >
                Nuestra misión en “El Amanecer” es brindar a nuestros huéspedes una estancia excepcional, fusionando la hospitalidad venezolana con servicios de alta calidad y un profundo respeto por la naturaleza.
              </motion.p>
            </motion.div>
            {/* Contenido secundario 2 */}
            <motion.div
              className='flex flex-col gap-2 mr-20'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.8 }}
            >
              <motion.img
                src="../src/assets/Sobrenosotros3.jpeg"
                className='w-full rounded-3xl object-cover h-56'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.6, duration: 0.8 }}
              />
              <motion.p
                className="text-black text-justify"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8, duration: 0.8 }}
              >
                Nuestro compromiso abarca desde la atención al cliente hasta la preservación del entorno natural que nos rodea. Además, nos dedicamos a cuidar y proteger el entorno natural mediante prácticas sostenibles, minimizando nuestro impacto ambiental y fomentando la conservación de la biodiversidad local
              </motion.p>
            </motion.div>
            {/* Contenido secundario 3 */}
            <motion.div
              className='flex flex-col gap-2 mr-20'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.8 }}
            >
              <motion.img
                src="../src/assets/Sobrenosotros4.jpeg"
                className='w-full rounded-3xl object-cover h-56'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.2, duration: 0.8 }}
              />
              <motion.p
                className="text-black text-justify"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.4, duration: 0.8 }}
              >
                En nuestro hotel, nos esforzamos por crear un ambiente acogedor y seguro, donde cada persona se sienta como en casa mientras disfruta de la belleza única de los Andes
              </motion.p>
            </motion.div>
            {/* Contenido secundario 4 */}
            <motion.div
              className='flex flex-col gap-2 mr-20'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.6, duration: 0.8 }}
            >
              <motion.img
                src="../src/assets/Sobrenosotros5.jpeg"
                className='w-full rounded-3xl object-cover h-56'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.8, duration: 0.8 }}
              />
              <motion.p
                className="text-black  text-justify"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4, duration: 0.8 }}
              >
                En “El Amanecer”, buscamos superar las expectativas de los huéspedes, brindando un servicio de alta calidad, además de ofrecer atención personalizada y satisfacción en cada aspecto de su estancia. Bienvenidos a nuestro rincón de tranquilidad y belleza en los majestuosos Andes venezolanos.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </>
  )
}

export default About