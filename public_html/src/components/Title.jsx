import Imagen from "../img/img_3053.jpg";
export const Title = () => {
  return (
    <div className='flex bg-black h-[840px] lg:w-5/6 lg:mx-auto w-full object-contain'>
      <div className='bg-blend-soft-light opacity-50 '>
        <img
          src={Imagen}
          className='w-screen h-full object-cover blur-xsm backdrop-opacity-5 mix-blend-hard-light saturate-150'
          alt='alquiler de plataformas rocco rental'
          title='alquiler de plataformas rocco rental'
        />
      </div>
      <div className='absolute  mx-0 align-middle my-20 ml-5'>
        <section className='lg:my-20 '>
          <h1 className='absolute w-80 text-color3 tracking-xl text-4xl whitespace-pre-line font-josefin font-semibold ml-2 mt-16'>
            Estamos para{" "}
            <span className='text-color2'>
              {`${"ayudarte"}\n`}{" "}
            </span>{" "}
            a hacer el trabajo.{"\n"}{" "}
            <div className='pt-10'>
              <span className='text-color2'>
                Rocco Rental
              </span>{" "}
              {"\n"}Alquiler de
              plataformas y andamios.
            </div>
          </h1>
        </section>
      </div>
    </div>
  );
};
