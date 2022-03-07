import React from 'react';
import PropTypes from 'prop-types';

const MapCard = ({ direccion, localidad, gasoleo, gasolina95, updatedAt, consumo, capacidad }) => (
  <div className='block w-full h-auto m-auto text-center bg-white rounded-lg shadow-lg'>
    <div className='px-1 py-1 text-sm border-b border-gray-300'>
      <p>
        <b>{direccion}</b>
      </p>
      <p>
        <b>{localidad}</b>
      </p>
    </div>
    <div className='p-1'>
      <p className='mb-1 text-sm text-gray-700'>
        Gasolina 95{' '}
        <strong>
          {gasolina95}€/l dep:{(capacidad * gasolina95).toFixed(2)}€
        </strong>
      </p>
      <p className='mb-1 text-sm text-gray-700'>
        Diesel{' '}
        <strong>
          {gasoleo}€/l dep:{(capacidad * gasoleo).toFixed(2)}€
        </strong>
      </p>
    </div>
    <div className='px-1 py-1 mb-1 text-sm text-gray-600 border-t border-gray-300'>
      <b>ACT:</b> {updatedAt}
    </div>
  </div>
);

export default MapCard;

MapCard.propTypes = {
  direccion: PropTypes.string,
  localidad: PropTypes.string,
  gasoleo: PropTypes.string,
  gasolina95: PropTypes.string,
  updatedAt: PropTypes.string,
  consumo: PropTypes.number,
  capacidad: PropTypes.number,
};
