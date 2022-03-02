import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export const ItemSelect = ({ lista, funcion, seleccion }) => {
  useEffect(() => {
    console.log(lista);
  }, []);
  return (
    <div className='flex justify-center'>
      <div className='mb-3 xl:w-96'>
        <select
          className='form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          aria-label='Default select example'
          name='marca'
          value='{seleciona}'
          onChange={funcion}>
          <option selected>{seleccion}</option>
          {lista.map((elemento, key) => {
            return (
              <option key={key} value={elemento}>
                {elemento}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

ItemSelect.propTypes = {
  lista: PropTypes.array,
  funcion: PropTypes.func,
  seleccion: PropTypes.string,
};
ItemSelect.defaultProps = {};
