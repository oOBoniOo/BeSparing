import React from 'react';

const MapCard = () => (
  <div className='block w-full h-auto m-auto text-center bg-white rounded-lg shadow-lg'>
    <div className='px-1 py-1 text-sm border-b border-gray-300'>NOMBRE/DIRECCION</div>
    <div className='p-1'>
      <p className='mb-1 text-sm font-bold text-gray-900 text-m'>Precio tot</p>
      <p className='mb-1 text-sm text-gray-700'>precio por litro</p>
    </div>
    <div className='px-1 py-1 mb-1 text-sm text-gray-600 border-t border-gray-300'>2 days ago</div>
  </div>
);

export default MapCard;
