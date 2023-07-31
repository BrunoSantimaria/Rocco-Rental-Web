import { Icon } from "@iconify/react";
import Formulario from "./Formulario";
export const Contacto = () => {
  return (
    <section>
      <div className='flex m-2 mt-12 ml-5'>
        <h2 className='font-poppins text-color3 tracking-titles text-2xl mr-6'>
          <span className='text-color2'>
            DUDAS
          </span>
          ? CONSULTANOS
        </h2>
        <div className='border-color2 border-xsm place-self-center w-5/6 '></div>
      </div>
      <p className='text-color3 ml-5 font-josefin tracking-titles font-light mt-5'>
        <strong>Podés</strong>{" "}
        comunicarte con nosotros via
        WhatsApp, o llamando al{" "}
        <strong>
          <a href='tel:3417121040'>
            {" "}
            (0341) - 7121040
          </a>
        </strong>
      </p>
      <a
        href='
https://wa.link/bu3a1c'
        target='_blank'
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "15vh",
          }}
        >
          <div className='border-color2 inline-flex border-[1px] border-opacity-100 rounded-lg w-3/5 h-20 justify-center items-center'>
            <h2 className='text-center text-color2 text-xl tracking-titles'>
              WHATSAPP
            </h2>
            <Icon
              icon='dashicons:whatsapp'
              color='#d9d9d9'
              width={"55px"}
            />
          </div>
        </div>
      </a>
      <p className='text-color3 ml-5 font-josefin tracking-titles font-light mt-5'>
        <strong>O</strong> contactanos
        vía mail desde el siguiente
        formulario
      </p>
      <Formulario />
    </section>
  );
};
