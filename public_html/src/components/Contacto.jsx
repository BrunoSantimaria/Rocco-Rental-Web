import { Icon } from "@iconify/react";
import Formulario from "./Formulario";
import React, { useRef } from "react";
export const Contacto = () => {
  const contactoRef = useRef(null);
  return (
    <section>
      <div
        className='flex  mt-12 '
        ref={contactoRef}
      >
        <h2 className='font-poppins lg:text-4xl text-color3 tracking-titles lg:w-5/6 pb-6 text-3xl'>
          <span className='text-color2'>
            DUDAS
          </span>
          ? CONSULTANOS
        </h2>
        <div className='border-color2 border-xsm place-self-center w-5/6 '></div>
      </div>
      <p className='text-color3 lg:text-2xl font-josefin tracking-titles font-light mt-5'>
        <strong>Podés</strong>{" "}
        comunicarte con nosotros via
        WhatsApp, o llamando al{" "}
        <strong>
          <a
            href='tel:3417121040'
            title='Rocco Rental Telefono'
          >
            {" "}
            (0341) - 7121040
          </a>
        </strong>
      </p>
      <a
        href='
https://wa.link/bu3a1c'
        target='_blank'
        title='Rocco Rental Whatsapp'
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
      <p className='text-color3 lg:text-2xl lg:ml-0 ml-5 font-josefin tracking-titles font-light mt-5'>
        <strong>O</strong> contactanos
        vía mail desde el siguiente
        formulario
      </p>
      <Formulario />
    </section>
  );
};
