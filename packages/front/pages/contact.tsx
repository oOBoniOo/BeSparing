import { useSelector } from 'react-redux';
import { iUserData } from '../lib/redux/userStore';

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const formSchema = yup.object().shape({
  email: yup.string().email().required(),
  nombre: yup.string().required().min(3),
  contenido: yup.string().required().min(10),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmit(data) {
    // handle submitting the form
    console.log(data);
  }

  return (
    <div className='flex justify-center'>
      <div className='flex justify-center w-1/2 px-10 py-20 bg-rose-200 h-1/2'>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-8'>
              <label
                htmlFor='nombre'
                className={`block font-bold text-sm mb-2 ${
                  errors.email ? 'text-red-600' : 'text-gray-900'
                }`}>
                Email
                {errors.email ? <>🔴</> : <></>}
              </label>

              <input
                type='text'
                name='email'
                id='email'
                placeholder='alguien@xxxxx.xxxx'
                className={`block w-full bg-transparent outline-none rounded-lg border-b-2 py-2 px-4  placeholder-rose-400 focus:bg-zinc-200 ${
                  errors.email ? 'text-gray-900 border-red-400' : 'text-gray-900 border-rose-400 '
                }`}
                {...register('email', { required: true })}
              />
              {errors.email && (
                <p className='mt-2 text-sm text-red-500'>necesitamos un mail valido.</p>
              )}
            </div>

            <div className='mb-8'>
              <label
                htmlFor='nombre'
                className={`block font-bold text-sm mb-2 ${
                  errors.nombre ? 'text-red-600' : 'text-gray-900'
                }`}>
                Nombre{errors.nombre ? <>🔴</> : <></>}
              </label>

              <input
                type='text'
                name='nombre'
                id='nombre'
                placeholder='nombre'
                className={`block w-full bg-transparent outline-none rounded-lg border-b-2 py-2 px-4  placeholder-rose-400 focus:bg-zinc-200 ${
                  errors.nombre ? 'text-gray-900 border-red-400' : 'text-gray-900 border-rose-400 '
                }`}
                {...register('nombre', { required: true })}
              />
              {errors.nombre && <p className='mt-2 text-sm text-red-600'>Introduce un nombre</p>}
            </div>
            <div className='mb-8'>
              <label
                htmlFor='contenido'
                className={`block font-bold text-sm mb-2 ${
                  errors.contenido ? 'text-red-600' : 'text-gray-900'
                }`}>
                Mensaje{errors.contenido ? <>🔴</> : <></>}
              </label>
              <textarea
                name='contenido'
                id='contenido'
                placeholder='tu mensaje'
                className={`block w-full bg-transparent outline-none rounded-lg border-b-2 py-2 px-4  placeholder-rose-400 focus:bg-zinc-200 ${
                  errors.contenido
                    ? 'text-gray-900 border-red-400'
                    : 'text-gray-900 border-rose-400 '
                }`}
                {...register('contenido', { required: true })}
              />
              {errors.contenido && (
                <p className='mt-2 text-sm text-red-600'>Introduce un mensaje</p>
              )}
            </div>

            <button className='inline-block px-5 py-2 text-sm bg-gray-900 rounded shadow text-rose-200'>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
