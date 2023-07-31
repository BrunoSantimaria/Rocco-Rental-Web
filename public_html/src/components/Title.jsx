import Imagen from "../img/img_3062.jpg";
export const Title = () => {
  return (
    <div className='flex'>
      <div className='bg-blend-soft-light opacity-50'>
        <img
          src={Imagen}
          className='blur-xsm backdrop-opacity-5 mix-blend-hard-light bg-cover saturate-150'
        ></img>
      </div>
      <h1 className='absolute w-80 text-color3 tracking-xl text-4xl font-josefin font-semibold ml-5 mt-16'>
        Estamos para{" "}
        <span className='text-color2'>
          {`${"ayudarte"}\n`}{" "}
        </span>{" "}
        a hacer el trabajo.
      </h1>
    </div>
  );
};
