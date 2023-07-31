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
    <div className='grid'>
      <form
        onSubmit={handleSubmit(
          onSubmit
        )}
        className='grid'
      >
        <input
          type='text'
          placeholder='Nombre'
          {...register("Nombre", {
            required: true,
            maxLength: 15,
          })}
        />
        <input
          type='email'
          placeholder='Email'
          {...register("Email", {
            required: true,
            maxLength: 30,
          })}
        />
        <input
          type='text'
          placeholder='Asunto'
          {...register("Asunto", {
            required: true,
            minLength: 5,
            maxLength: 30,
          })}
        />
        <textarea
          {...register("Consulta", {
            required: true,
            minLength: 20,
            maxLength: 200,
          })}
        />

        <input type='submit' />
      </form>
    </div>
  );
}
