import React from 'react';

export const UpdateCar = () => {
  return (
    <div className='flex justify-center'>
      <div className='block max-w-md p-6 bg-white rounded-lg shadow-lg'>
        <h3>Datos incorrectos o inexistentes, Introduce nuevos datos</h3>
        <form>
          <div className='grid grid-cols-2 gap-4'>
            <div className='mb-6 form-group'>
              <input
                type='text'
                className='form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                id='exampleInput123'
                aria-describedby='emailHelp123'
                placeholder='Consumo'
              />
            </div>
            <div className='mb-6 form-group'>
              <input
                type='text'
                className='form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                id='exampleInput124'
                aria-describedby='emailHelp124'
                placeholder='Capacidad (en Litros)'
              />
            </div>
          </div>
          <button
            type='submit'
            className='
      w-full
      px-6
      py-2.5
      bg-rose-300
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-gray-900 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out'>
            Actualizar mis datos
          </button>
        </form>
      </div>
    </div>
  );
};
