import { Nosotros1 } from "../img/NosotrosImagenes";

export const Nosotros = () => {
  return (
    <div>
      <div className='flex m-2 mt-12 ml-5'>
        <h2 className='font-poppins text-color3 tracking-titles text-2xl mr-10'>
          Nosotros
        </h2>
        <div className='border-color2 border-xsm place-self-center w-full mr-2 h-0'></div>
      </div>
      <section className='ml-5 whitespace-pre-line h-fit'>
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
        <div className='mr-5 mt-5 '>
          <img
            src={Nosotros1}
            className='rounded-xl bg-no-repeat'
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
          <strong>accesorios</strong>,
          <strong>escaleras</strong> y{" "}
          <strong>puntales</strong>.
        </h3>
      </section>
    </div>
  );
};
