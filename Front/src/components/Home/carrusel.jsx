import { useState, useEffect } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { motion, useAnimation } from "framer-motion";

function Carrusel() {
  const images = [
    '../src/assets/Carrusel/Carrusel1.jpeg',
    '../src/assets/Carrusel/Carrusel2.jpeg',
    '../src/assets/Carrusel/Carrusel3.jpeg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const nextSlide = async () => {
    await controls.start({ opacity: 0 }); // Inicia la animación de salida
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    setCurrentImageIndex(index);
    controls.start({ opacity: 1 }); // Inicia la animación de entrada
  };

  const prevSlide = async () => {
    await controls.start({ opacity: 0 });
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    setCurrentImageIndex(index);
    controls.start({ opacity: 1 });
  };

  return (
    <div className="carousel relative bg-gray-200">
      <motion.button
        onClick={prevSlide}
        className="text-2xl bg-transparent border-none absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        <RiArrowLeftSLine />
      </motion.button>
      <motion.div
        className="w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        <img
          src={images[currentImageIndex]}
          alt=""
          className="w-full h-64 object-cover rounded shadow-lg"
        />
      </motion.div>
      <motion.button
        onClick={nextSlide}
        className="text-2xl bg-transparent border-non absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        <RiArrowRightSLine />
      </motion.button>
    </div>
  );
}

export default Carrusel;
