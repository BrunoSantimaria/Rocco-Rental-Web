import React from "react";
import { useForm } from "react-hook-form";

export default function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    const mailtoLink = `mailto:info@roccorental.com.ar?subject=${encodeURIComponent(
      data.Asunto
    )}&body=${encodeURIComponent(
      `Hola, mi nombre es ${data.Nombre} y queria realizar la siguiente consulta: {\n}${data.Consulta}{\n}Mi correo de contacto es ${data.Email}. Saludos.`
    )}`;

    window.location.href = mailtoLink;
  };
  console.log(errors);

  return (
    <div className=' flex-col justify-center mx-auto'>
      <form
        onSubmit={handleSubmit(
          onSubmit
        )}
        className=' mt-5 flex-col align-center  justify-center mx-auto text-center'
      >
        <input
          type='text'
          placeholder='Nombre'
          {...register("Nombre", {
            required: true,
            maxLength: 15,
          })}
          className='my-2 rounded-sm w-full lg:w-4/6  h-10 pl-4 p-1 bg-color3 text-color1'
        />
        <input
          type='email'
          placeholder='Email'
          {...register("Email", {
            required: true,
            maxLength: 30,
          })}
          className='my-2 pl-4 rounded-sm lg:w-4/6 p-1 h-10 w-full bg-color3 text-color1'
        />
        <input
          type='text'
          placeholder='Asunto'
          {...register("Asunto", {
            required: true,
            minLength: 5,
            maxLength: 30,
          })}
          className='my-2 w-full pl-4 lg:w-4/6 rounded-sm  h-10 p-1 bg-color3 text-color1'
        />
        <textarea
          placeholder='Consulta'
          {...register("Consulta", {
            required: true,
            minLength: 20,
            maxLength: 200,
          })}
          className='my-2 rounded-sm w-full pl-4 p-1 lg:w-4/6 bg-color3  h-20 text-color1'
        />
        <div className='border-color2 lg:w-4/6 inline-flex mt-5 border-[1px] border-opacity-100 rounded-lg w-full h-10 justify-center items-center'>
          <button
            type='submit'
            className='flex-col text-color3'
          >
            Enviar
          </button>
        </div>
      </form>
      <div className='w-screen h-3/4'></div>
    </div>
  );
}
