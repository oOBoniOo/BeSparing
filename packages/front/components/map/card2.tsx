import React from 'react';
import PropTypes from 'prop-types';
import gasIcon from '../../public/piggy_gas_mini.png';
import Image from 'next/image';

const MapCard = ({
  nombre,
  direccion,
  localidad,
  precioCombustible,
  tipo,
  updatedAt,
  consumo,
  capacidad,
  cp,
}) => (
  <div className="flex flex-col items-start justify-between px-1 py-1 mb-2 shadow-lg bg-zinc-100">
    <div className="flex justify-between w-full">
      <div className="flex flex-col items-start justify-start w-full px-2">
        <div className="flex items-center justify-between w-full">
          <span className="m-auto text-lg font-extrabold text-gray-900 w-200">{nombre}</span>
        </div>
        <div className="flex items-center w-full">
          <span className="m-auto px-1 text-sm font-medium italic text-gray-900 w-200">
            {direccion}
          </span>
          <span className="m-auto text-gray-500 font-medium italic text-sm">
            {localidad} (CP: {cp})
          </span>
          {/* <span className="m-auto text-gray-600 text-m from-neutral-500">(CP: {cp})</span> */}
        </div>
        {tipo == 'gasolina' && (
          <div className="flex items-center w-full">
            <span className="m-auto text-lg font-extrabold text-gray-700">
              Precio Gasolina 95:{' '}
            </span>
            <span className="m-auto text-lg font-extrabold text-gray-700">
              {' '}
              {precioCombustible}€/l{' '}
            </span>
          </div>
        )}
        {tipo == 'diesel' && (
          <div className="flex items-center w-full">
            <span className="m-auto text-lg font-extrabold text-gray-700">Precio Diesel: </span>
            <span className="m-auto text-lg font-extrabold text-gray-700">
              {' '}
              {precioCombustible}€/l{' '}
            </span>
          </div>
        )}
        <div className="flex items-center w-full">
          <span className="m-auto text-sm text-gray-500 ">Depósito lleno: </span>
          <span className="m-auto text-sm text-gray-600 from-neutral-500">
            {(capacidad * precioCombustible).toFixed(2)}€
          </span>
          <span className="m-auto text-sm text-gray-500 ">
            {' '}
            {((consumo / 100) * precioCombustible).toFixed(3)}€ / km
          </span>
        </div>
        <div className="flex items-center w-full">
          <span className="pt-2 m-auto text-xs text-gray-500 ">actualizado {updatedAt}</span>
        </div>
      </div>

      <div className="object-cover w-32 h-32 rounded-lg">
        <Image src={gasIcon} alt="piggygas" width={100} height={100} />
      </div>
    </div>
  </div>
);

export default MapCard;

MapCard.propTypes = {
  nombre: PropTypes.string,
  direccion: PropTypes.string,
  localidad: PropTypes.string,
  precioCombustible: PropTypes.string,
  tipo: PropTypes.string,
  updatedAt: PropTypes.string,
  consumo: PropTypes.number,
  capacidad: PropTypes.number,
  cp: PropTypes.number,
};
