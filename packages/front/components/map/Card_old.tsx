import React from 'react';
import PropTypes from 'prop-types';

const MapCard = ({
  direccion,
  localidad,
  precioCombustible,
  tipo,
  updatedAt,
  consumo,
  capacidad,
  cp,
}) => (
  <div className='block w-full h-auto m-auto text-center bg-white rounded-lg shadow-lg'>
    <div className='px-1 py-1 text-sm border-b border-gray-300'>
      <p>
        <b>{direccion}</b>
      </p>
      <p>
        <b>
          {localidad} ({cp})
        </b>
      </p>
    </div>
    <div className='p-1'>
      {tipo == 'gasolina' && (
        <>
          <p className='mb-1 text-sm text-gray-700'>
            Gasolina 95{' '}
            <strong>
              {precioCombustible}€/l dep:{(capacidad * precioCombustible).toFixed(2)}€
            </strong>
          </p>
          <p className='mb-1 text-sm text-gray-700'>
            <strong>{((consumo / 100) * precioCombustible).toFixed(3)}€ el km</strong>
          </p>
        </>
      )}
      {tipo == 'diesel' && (
        <>
          <p className='mb-1 text-sm text-gray-700'>
            Diesel{' '}
            <strong>
              {precioCombustible}€/l dep:{(capacidad * precioCombustible).toFixed(2)}€
            </strong>
          </p>
          <p className='mb-1 text-sm text-gray-700'>
            <strong>{((consumo / 100) * precioCombustible).toFixed(3)}€ el km</strong>
          </p>
        </>
      )}
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
  precioCombustible: PropTypes.string,
  tipo: PropTypes.string,
  updatedAt: PropTypes.string,
  consumo: PropTypes.number,
  capacidad: PropTypes.number,
  cp: PropTypes.number,
};
