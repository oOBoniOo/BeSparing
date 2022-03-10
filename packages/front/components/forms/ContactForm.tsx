import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const formSchema = yup.object().shape({
  email: yup.string().email().required(),
  nombre: yup.string().required().min(3),
});

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function woosalSubmit(data) {
    // handle submitting the form
    console.log(data);
  }

  console.log(watch('email'));

  console.log(errors);
  return (
    <div className='min-h-screen px-10 py-20 bg-purple-700'>
      <div>
        <form onSubmit={handleSubmit(woosalSubmit)}>
          <div className='mb-8'>
            <label
              htmlFor='email'
              className={`block font-bold text-sm mb-2 ${
                errors.email ? 'text-red-600' : 'text-gray-900'
              }`}>
              Email
            </label>
            <input
              type='text'
              name='email'
              id='email'
              placeholder='hey@chrisoncode.io'
              className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-purple-600 ${
                errors.email ? 'text-red-300 border-red-400' : 'text-purple-200 border-purple-400'
              }`}
              {...register('email', { required: true })}
            />
            {errors.email && (
              <p className='mt-2 text-sm text-red-500'>A valid email is required.</p>
            )}
          </div>

          <div className='mb-8'>
            <label
              htmlFor='password'
              className={`block font-bold text-sm mb-2 ${
                errors.password ? 'text-red-600' : 'text-gray-900'
              }`}>
              Password
            </label>
            <input
              type='text'
              name='nombre'
              id='nombre'
              placeholder='superduperpassword'
              className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4 text-purple-200 focus:bg-purple-600 placeholder-purple-500 ${
                errors.password ? 'text-red-600' : 'text-gray-900'
              }`}
              {...register('nombre', { required: true })}
            />
            {errors.password && (
              <p className='mt-2 text-sm text-red-600'>Your password is required.</p>
            )}
          </div>

          <button className='inline-block px-5 py-2 text-sm text-gray-900 rounded shadow bg-rose-200'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
