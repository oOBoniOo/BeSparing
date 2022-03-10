/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCarOnDB } from '../../lib/api/carsRequests';
import { updateUserOnDB } from '../../lib/api/usersRequests';
import { updateCarbData } from '../../lib/redux/userAtcions';
import { iCarbData, iUserData } from '../../lib/redux/userStore';

export const UpdateCar = ({ state, setState, handleModal }) => {
  const consumo = useRef(null);
  const capacidad = useRef(null);
  const dispatch = useDispatch();
  const userState = useSelector((state: iUserData) => state);
  const [tipoValue, setTipo] = useState('gasolina');
  const getTipo = (selection) => {
    setTipo(selection.target.value);
  };

  const updateUser = async () => {
    const consValue = consumo.current.value;
    const capValue = capacidad.current.value;
    const carString = `${state.marca} - ${state.modelo}`;

    if (consValue > 0 && capValue > 0) {
      const carbData: iCarbData = {
        consumo: consValue,
        capacidad: capValue,
        modelo: carString,
        tipo: tipoValue,
      };
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
          tipo: tipoValue,
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
    <>
      <div className="flex items-center mb-4 bg-white border border-solid border-gray-300">
        <div
          className="flex flex-col items-start mb-4 text-gray-500 font-semibold "
          onChange={getTipo}
        >
          <div>
            <input className="m-1" type="radio" value="gasolina" name="gender" /> gasolina
          </div>
          <div>
            <input className="m-1" type="radio" value="diesel" name="gender" /> diesel
          </div>
          <div>
            <input className="m-1" type="radio" value="electricidad" name="gender" /> electricidad
          </div>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <input
          type="text"
          className="form-control
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleInput123"
          aria-describedby="emailHelp123"
          placeholder="Consumo"
          ref={consumo}
        />
      </div>
      <div className="flex items-center mb-4">
        <input
          type="text"
          className="form-control
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleInput124"
          aria-describedby="emailHelp124"
          placeholder="Capacidad (en Litros)"
          ref={capacidad}
        />
      </div>
      <button
        onClick={updateUser}
        className="inline-block m-4 px-6 py-2.5 bg-rose-300 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Actualizar mis datos
      </button>
    </>
  );
};
