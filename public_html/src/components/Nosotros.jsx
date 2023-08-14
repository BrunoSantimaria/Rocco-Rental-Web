import {
  Nosotros1,
  Nosotros2,
  Nosotros3,
} from "../img/NosotrosImagenes";
import { herramientasImg } from "../img/herramientas/HerramientasImg";
import { Carousel } from "./Carousel";

export const Nosotros = () => {
  return (
    <div className='flex-col justify-center'>
      <div className='flex  mt-8 '>
        <h2 className='font-poppins text-color3 tracking-titles py-6 text-3xl mr-10'>
          Nosotros
        </h2>
        <div className='border-color2 border-xsm place-self-center w-5/6 h-0'></div>
      </div>
      <section className='whitespace-pre-line h-fit'>
        <h2 className='text-[22px] text-color3 font-poppins tracking-wider mt-4 mb-4'>
          <span className='text-color2'>
            EQUIPAMIENTO
          </span>{" "}
          PARA {"\n"}TUS OBRAS
        </h2>
        <h3 className=' font-josefin font-light text-lg  text-color3 tracking-wider w-[360px]'>
          Nuestra empresa está enfocada
          a suplir las necesidades de
          todo tipo de obras y
          proyectos. Prestamos servicio
          de alquiler de{" "}
          <strong>
            plataformas tijera
          </strong>
          , <strong>andamios</strong> y{" "}
          <strong>
            herramientas para la
            construcción
          </strong>
          .
        </h3>
        <div className='mr-5 mt-5 w-full'>
          <img
            src={Nosotros1}
            title='alquiler plataformas elevadoras rosario'
            alt='alquiler plataformas rosario'
            className='rounded-xl bg-no-repeat justify-center items-center place-items-center content-center object-cover h-[150px] w-[380px] backdrop-opacity-50 mix-blend-lighten bg-cover saturate-50'
          ></img>
        </div>
        <h2 className='text-[22px] text-color3 font-poppins tracking-wider mt-4 mb-4'>
          <span className='text-color2'>
            ALQUILÁ
          </span>{" "}
          {"\n"} CON NOSOTROS
        </h2>
        <h3 className=' font-josefin font-light text-lg  text-color3 tracking-wider w-[360px]'>
          <strong>
            Plataformas tijera
          </strong>{" "}
          hasta 12 metros de altura de
          trabajo,{" "}
          <strong>
            balancín colgante eléctrico
          </strong>
          , <strong>andamios</strong> y{" "}
          <strong>accesorios</strong>,{" "}
          <strong>
            puntales telescópicos
          </strong>
          .
        </h3>
        <div className=' mt-5 h-[150px] w-full'>
          <img
            src={Nosotros2}
            title='alquiler plataformas elevadoras rosario'
            alt='alquiler andamios rosario'
            className='rounded-xl bg-no-repeat object-cover h-[150px] w-full backdrop-opacity-50 mix-blend-lighten bg-cover saturate-50'
          ></img>
        </div>
        <h2 className='text-[22px] text-color3 font-poppins tracking-wider mt-4 mb-4'>
          <span className='text-color2'>
            VENTA
          </span>{" "}
          {"\n"} DE HERRAMIENTAS
        </h2>
        <h3 className=' font-josefin font-light text-lg  text-color3 tracking-wider w-[360px]'>
          <strong>Hormigoneras</strong>,{" "}
          <strong> carretillas</strong>,{" "}
          <strong>caballetes</strong> y{" "}
          <strong>andamios</strong>.
          Directo de fabrica, la mejor{" "}
          <strong>calidad</strong> y{" "}
          <strong>precio</strong>.
          Solicita más información sobre
          nuestros productos.
        </h3>
        <div className='rounded-xl mt-5 bg-no-repeat object-cover h-[150px] w-full backdrop-opacity-50 mix-blend-lighten  '>
          <Carousel
            slides={herramientasImg}
          />
        </div>
      </section>
    </div>
  );
};
