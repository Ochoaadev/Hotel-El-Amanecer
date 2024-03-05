import { RiInstagramLine, RiFacebookBoxLine, RiWhatsappLine } from "react-icons/ri"

function Footer() {
  return (
    <footer className='bg-oscuro mt-14 p-4'>
      <div className='flex items-center justify-center border-b'>
        {/*Redes Sociales */}
        <nav className='flex items-center gap-4 p-5'>
          <a href="#" className='block text-black p-4 rounded-full bg-crema ml-6'>
            {""}<RiInstagramLine />
          </a>
          <a href="#" className='block text-black p-4 rounded-full bg-crema ml-6'>
            {""}<RiFacebookBoxLine />
          </a>
          <a href="#" className='block text-black p-4 rounded-full bg-crema ml-6'>
            {""}<RiWhatsappLine />
          </a>
        </nav>
      </div>
      <p className='text-blanco font-bold flex items-center justify-center p-4'>
        El Amanecer Boutique
      </p>
      <p className='text-blanco font-bold flex items-center justify-center p-4'>
        © 2024 All rights reserved
      </p>
    </footer>
  )
}

export default Footer