import {
  Nosotros1,
  Nosotros2,
  Nosotros3,
} from "../img/NosotrosImagenes";

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
          Contamos con{" "}
          <strong>
            plataformas tijera
          </strong>{" "}
          hasta 12 metros de altura de
          trabajo,{" "}
          <strong>
            balancín colgante eléctrico
          </strong>
          , <strong>andamios</strong> y{" "}
          <strong>accesorios</strong>,{" "}
          <strong>escaleras</strong> y{" "}
          <strong>puntales</strong>.
        </h3>
        <div className=' mt-5 h-[150px] w-full'>
          <img
            src={Nosotros2}
            alt='alquiler andamios rosario'
            className='rounded-xl bg-no-repeat object-cover h-[150px] w-full backdrop-opacity-50 mix-blend-lighten bg-cover saturate-50'
          ></img>
        </div>
        <h2 className='text-[22px] text-color3 font-poppins tracking-wider mt-4 mb-4'>
          <span className='text-color2'>
            NUESTRAS
          </span>{" "}
          {"\n"} HERRAMIENTAS
        </h2>
        <h3 className=' font-josefin font-light text-lg  text-color3 tracking-wider w-[360px]'>
          Contamos con{" "}
          <strong>hormigoneras</strong>,{" "}
          <strong>carretillas</strong> y{" "}
          <strong>caballetes</strong> en
          venta, de la mejor{" "}
          <strong>calidad</strong> y al
          mejor <strong>precio</strong>.
        </h3>
        <div className='flex  w-full  mt-5 mr-5'>
          <img
            src={Nosotros3}
            alt='hormigoneras venta rosario'
            className='rounded-xl bg-no-repeat object-cover h-[150px] w-full backdrop-opacity-50 mix-blend-lighten bg-cover saturate-50 '
          ></img>
        </div>
      </section>
    </div>
  );
};
