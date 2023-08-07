import { useState } from "react";
import { plataformaTijera } from "../img/NosotrosImagenes";
import { Icon } from "@iconify/react";
export const Productos = () => {
  const [
    currentIndex,
    setCurrentIndex,
  ] = useState([
    {
      tijeraIndex: 1,
    },
  ]);

  const prevSlide = (
    sectionIndex,
    imageArray,
    propertyName
  ) => {
    const section =
      currentIndex[sectionIndex];
    const isFirstSlide =
      section[propertyName] === 0;
    const newIndex = isFirstSlide
      ? imageArray.length - 1
      : section[propertyName] - 1;

    setCurrentIndex([
      ...currentIndex.slice(
        0,
        sectionIndex
      ),
      {
        ...section,
        [propertyName]: newIndex,
      },
      ...currentIndex.slice(
        sectionIndex + 1
      ),
    ]);
  };

  const nextSlide = (
    sectionIndex,
    imageArray,
    propertyName
  ) => {
    const section =
      currentIndex[sectionIndex];
    const isLastSlide =
      section[propertyName] ===
      imageArray.length - 1;
    const newIndex = isLastSlide
      ? 0
      : section[propertyName] + 1;

    setCurrentIndex([
      ...currentIndex.slice(
        0,
        sectionIndex
      ),
      {
        ...section,
        [propertyName]: newIndex,
      },
      ...currentIndex.slice(
        sectionIndex + 1
      ),
    ]);
  };
  return (
    <section className='mt-10'>
      <div className='flex'>
        <h2 className='font-poppins h-fit py-6 text-color3  tracking-titles text-3xl mr-10'>
          Productos y servicios
        </h2>
        <div className='border-color2 border-xsm mt-16 w-4/6 mx-auto h-0'></div>
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
        <div className='w-full h-[320px] bg-black mt-5 rounded-xl relative group'>
          <div
            style={{
              backgroundImage: `url(${
                plataformaTijera[
                  currentIndex[0]
                    .tijeraIndex
                ]
              })`,
              backgroundSize: "cover", // Utiliza "cover" para ajustar sin recortar
              backgroundRepeat:
                "no-repeat",
              width: "100%", // Asegúrate de que el div interno tome el ancho completo
              height: "100%", // Asegúrate de que el div interno tome la altura completa
            }}
            className='rounded-xl duration-300'
          ></div>
          <div className='hidden group-hover:block absolute top-[50%] p-2 -translate-x-8 translate-y-[-50%] left-5 text-2xl cursor-pointer'>
            <Icon
              icon='ei:arrow-left'
              className='text-color3 w-[40px] h-20'
              onClick={() =>
                prevSlide(
                  0,
                  plataformaTijera,
                  "tijeraIndex"
                )
              }
            />
          </div>
          <div className='hidden group-hover:block absolute top-[50%] p-2 -translate-x-[-32px] translate-y-[-50%] right-5 text-2xl cursor-pointer'>
            <Icon
              icon='ei:arrow-right'
              className='text-color3 w-[40px] h-20'
              onClick={() =>
                nextSlide(
                  0,
                  plataformaTijera,
                  "tijeraIndex"
                )
              }
            />
          </div>
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
