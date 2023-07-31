import { Productos1 } from "../img/NosotrosImagenes";

export const Productos = () => {
  return (
    <section className='mt-10'>
      <div className='flex'>
        <h2 className='font-poppins h-fit text-color3 whitespace-pre-line tracking-titles text-2xl mr-10'>
          Productos y servicios
        </h2>
        <div className='border-color2 border-xsm mt-4 w-4/6 h-0'></div>
      </div>
      <div>
        <h2 className='text-[22px] text-color3 font-poppins tracking-wider mt-5 mb-4'>
          PLATAFORMAS TIJERA
        </h2>
        <h3 className=' font-josefin font-light text-lg  text-color3 tracking-wider w-[360px]'>
          <strong>Alquiler</strong> de
          equipos para trabajo en altura
          hasta 12 metros.
        </h3>
        <div className='w-full h-[213px]  bg-black mt-5 rounded-xl'>
          <img
            src={Productos1}
            className='w-full h-full rounded-xl object-cover'
          />
        </div>
        <h2 className='text-[22px] text-color3 font-poppins tracking-wider mt-5 mb-4'>
          PLATAFORMA COLGANTE
        </h2>
        <h3 className=' font-josefin font-light text-lg  text-color3 tracking-wider w-[360px]'>
          <strong>Alquiler</strong> de
          andamio colgante eléctrico,
          para trabajos hasta 100
          metros.
        </h3>
        <div className='w-full h-[213px]  bg-black mt-5 rounded-xl'>
          {" "}
        </div>
        <h2 className='text-[22px] text-color3 font-poppins tracking-wider mt-5 mb-4'>
          ANDAMIOS
        </h2>
        <h3 className=' font-josefin font-light text-lg  text-color3 tracking-wider w-[360px]'>
          <strong>Alquiler</strong> y{" "}
          <strong>venta</strong> de
          andamios tubulares y
          accesorios. Disponibles en
          medidas estándar y de pasillo.
        </h3>
        <div className='w-full h-[213px]  bg-black mt-5 rounded-xl'>
          {" "}
        </div>
        <h2 className='text-[22px] text-color3 font-poppins tracking-wider mt-5 mb-4'>
          HERRAMIENTAS
        </h2>
        <h3 className=' font-josefin font-light text-lg  text-color3 tracking-wider w-[360px]'>
          <strong>Venta</strong>.
          Disponemos de carretillas,
          hormigoneras, caballetes,
          palas y más.
        </h3>
        <div className='w-full h-[213px]  bg-black mt-5 rounded-xl'>
          {" "}
        </div>
      </div>
    </section>
  );
};
