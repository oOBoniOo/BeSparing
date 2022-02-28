import { useUser } from '@auth0/nextjs-auth0';
import React from 'react';
import MapCard from '../components/Map/Card';
import SimpleMap from '../components/Map/Mapa';

const Gasolina = () => {
  const { user } = useUser();
  console.log('tsx gasolina', user);
  return (
    <>
      <div className='container'>FILTROS</div>
      <div className='grid grid-cols-3 gap-2'>
        <div className='col-span-2 p-10 bg-white rounded'>
          <SimpleMap />
        </div>
        <div className='grid grid-cols-3 grid-rows-3 gap-2 py-10'>
          <MapCard />
          <MapCard />
          <MapCard />
          <MapCard />
          <MapCard />
          <MapCard />
          <MapCard />
          <MapCard />
          <MapCard />
        </div>
      </div>
    </>
  );
};

export default Gasolina;
