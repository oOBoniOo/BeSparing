import React from 'react';
import PropTypes from 'prop-types';
export const Cabecera = ({ userState }) => {
  return (
    <div className='absolute top-0 z-20 flex w-full px-4 py-2 bg-zinc-100 '>
      <p className='m-auto text-lg font-medium'>
        PUNTOS DE REPOSTAJE MAS ECONÓMICOS PARA TU{' '}
        <b className='text-lg'>{userState.carbData.modelo} </b>
        de <b>{userState.carbData.tipo}</b>{' '}
      </p>
    </div>
  );
};

Cabecera.propTypes = {
  userState: PropTypes.object,
};
