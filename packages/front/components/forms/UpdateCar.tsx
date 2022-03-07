/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCarOnDB } from '../../lib/api/carsRequests';
import { updateUserOnDB } from '../../lib/api/usersRequests';
import { updateCarbData } from '../../lib/redux/userAtcions';
import { iCarbData, iUserData } from '../../lib/redux/userStore';

export const UpdateCar = ({ state, setState, handleModal }) => {
  const consumo = useRef();
  const capacidad = useRef();
  const dispatch = useDispatch();
  const userState = useSelector((state: iUserData) => state);

  const updateUser = async () => {
    const consValue = consumo.current.value;
    const capValue = capacidad.current.value;
    const carString = `${state.marca} - ${state.modelo}`;

    if (consValue > 0 && capValue > 0) {
      console.log('MARCA DEL COCHECITO', carString);
      const carbData: iCarbData = { consumo: consValue, capacidad: capValue, modelo: carString };
      const res = await updateUserOnDB({ ...userState, carbData });
      if (res.status == 200) {
        dispatch(updateCarbData(carbData));

        const nuevoObjeto = {
          _id: state._id,
          marca: state.marca,
          modelo: state.modelo,
          generacion: state.generacion,
          version: state.version,
          consumo: consValue,
          capacidad: capValue,
          estado: 'validacion',
        };
        const res = await updateCarOnDB(nuevoObjeto);
        if (res.status == 200) {
          setState({
            ...state,
            carData: { consumo: consValue, capacidad: capValue },
          });
          handleModal(false);
        }
      }
    }
  };

  return (
    <div className='flex justify-center'>
      <div className='block max-w-md p-6 bg-white rounded-lg shadow-lg'>
        <h3>Datos incorrectos o inexistentes, Introduce nuevos datos</h3>
        <div>
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
                ref={consumo}
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
                ref={capacidad}
              />
            </div>
          </div>
          <button
            onClick={updateUser}
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
        </div>
      </div>
    </div>
  );
};
// const updateUser = async () => {
//   const carbData = { consumo: state.carData.consumo, capacidad: state.carData.capacidad };
//   const res = await updateUserOnDB({ ...userState, carbData });
//   if (res.status == 200) {
//     console.log('111111111111');
//     dispatch(updateCarbData(carbData));

//     const nuevoObjeto = {
//       marca: state.marca,
//       modelo: state.modelo,
//       generacion: state.generacion,
//       version: state.version,
//       consumo: state.carData.consumo,
//       capacidad: state.carData.capacidad,
//       estado: 'validacion',
//     };
//     console.log('ENCIMA');
//     const res = await createCarOnDB({ nuevoObjeto });
//     console.log('ABAJ');
//     if (res.status == 200) {
//       setState({ ...state, cardData: nuevoObjeto });
//     }
//   }
// };
