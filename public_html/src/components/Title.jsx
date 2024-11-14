import { motion } from "framer-motion";
import imagen from "../img/background.jpeg";
import Imagen from "../img/img_3062.jpg";
import { handleWhatsApp } from "../utils";
export const Title = () => {
  return (
    <div className='relative flex items-center justify-center bg-black min-h-screen pt-6 md:min-h-screen w-full lg:mx-auto'>
      <img
        src={Imagen}
        className='absolute inset-0 w-full h-full object-cover opacity-40 blur-[3px]'
        alt='alquiler de plataformas rocco rental'
        title='alquiler de plataformas rocco rental'
      />

      <section className='relative z-10 flex flex-col items-center px-6 md:px-0 text-center'>
        <motion.h1
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
          className='text-color3 font-bold text-6xl md:text-7xl lg:text-8xl font-conthic leading-tight mt-12'
        >
          Estamos para ayudarte
          <br />
          <span className='text-color2'>a hacer el trabajo</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className='mt-6 text-color3 text-lg md:text-xl font-medium w-3/3 md:w-1/3 font-poppins'
        >
          <strong className='text-color2 font-bold '>Rocco Rental S.R.L.</strong> tu socio confiable en alquiler de plataformas tijera y andamios. Brindamos
          soluciones seguras y eficientes para proyectos de altura con atención personalizada.{" "}
          <p className='text-color2 underline px-2 py-1 rounded-md'>Tu proyecto, nuestra prioridad</p>
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }} className='mt-12 text-color3  w-full font-poppins'>
          <span
            onClick={handleWhatsApp}
            className='p-4 text-lg w-full px-12 bg-transparent  font-poppins border-2 rounded-lg border-color2 hover:font-bold cursor-pointer hover:bg-color2 duration-700'
          >
            HABLEMOS
          </span>
        </motion.p>
      </section>
    </div>
  );
};
