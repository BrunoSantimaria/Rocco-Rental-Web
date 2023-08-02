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

    const mailtoLink = `mailto:santimariabruno@gmail.com?subject=${encodeURIComponent(
      data.Asunto
    )}&body=${encodeURIComponent(
      `Mi nombre: ${data.Nombre}\n y mi Email: ${data.Email}\nQueria consultar: ${data.Consulta}`
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
        className=' mt-5 flex-col align-center justify-center mx-auto text-center'
      >
        <input
          type='text'
          placeholder='Nombre'
          {...register("Nombre", {
            required: true,
            maxLength: 15,
          })}
          className='m-2 rounded-sm w-10/12  p-1 bg-color3 text-color1'
        />
        <input
          type='email'
          placeholder='Email'
          {...register("Email", {
            required: true,
            maxLength: 30,
          })}
          className='m-2  rounded-sm p-1 w-10/12 bg-color3 text-color1'
        />
        <input
          type='text'
          placeholder='Asunto'
          {...register("Asunto", {
            required: true,
            minLength: 5,
            maxLength: 30,
          })}
          className='m-2 w-10/12 rounded-sm p-1 bg-color3 text-color1'
        />
        <textarea
          placeholder='Consulta'
          {...register("Consulta", {
            required: true,
            minLength: 20,
            maxLength: 200,
          })}
          className='m-2 rounded-sm w-10/12 p-1 bg-color3 w-[190px] text-color1'
        />
        <div className='border-color2 inline-flex border-[1px] border-opacity-100 rounded-lg w-3/6 h-10 justify-center items-center'>
          <button
            type='submit'
            className='flex-col text-color3'
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
