import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { UpdateCar } from '../forms/UpdateCar';

export const TarjetaCar = ({ state }) => {
  const [needUpdate, setNeedUpdate] = useState(false);
  const updateCarData = () => {
    console.log('APRETEISION THE BUTTONESION');
    setNeedUpdate(true);
  };
  const updateUserData = () => {};
  return (
    <div className='flex justify-center'>
      <div className='block max-w-sm p-6 bg-white rounded-lg shadow-lg'>
        <h5 className='mb-2 text-xl font-medium leading-tight text-gray-900'>
          {`${state.marca} ${state.modelo}`}
        </h5>
        <h4 className='mb-2 font-medium leading-tight text-gray-900 text-m'>{state.generacion}</h4>
        <h3 className='mb-2 leading-tight text-gray-900 text-m'>{state.version}</h3>
        <p className='mb-4 text-base text-gray-700'> Consumo: {state.carData.consumo} l/100</p>
        <p className='mb-4 text-base text-gray-700'>
          {' '}
          Capacidad deposito: {state.carData.capacidad} l
        </p>
        <button
          type='button'
          className=' inline-block m-4 px-6 py-2.5 bg-rose-300 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
          onClick={updateUserData}>
          Guardar datos
        </button>
        <button
          type='button'
          className=' inline-block m-4 px-6 py-2.5 bg-rose-300 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
          onClick={() => {
            updateCarData();
          }}>
          {needUpdate && <UpdateCar />}
          Datos incorrectos
        </button>
      </div>
    </div>
  );
};
TarjetaCar.propTypes = {
  state: {
    marca: PropTypes.string,
    modelo: PropTypes.string,
    generacion: PropTypes.string,
    version: PropTypes.string,
    marcasData: PropTypes.array,
    modelosData: PropTypes.array,
    gensData: PropTypes.array,
    versionsData: PropTypes.array,
    carData: PropTypes.object,
  },
};
TarjetaCar.defaultProps = {
  state: {
    marca: '',
    modelo: '',
    generacion: '',
    version: '',
    marcasData: [],
    modelosData: [],
    gensData: [],
    versionsData: [],
    carData: {},
  },
};
