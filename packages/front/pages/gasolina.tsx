import { useUser } from '@auth0/nextjs-auth0';
import React from 'react';
import MapCard from '../components/Map/Card';
import SimpleMap from '../components/Map/Mapa';

const Gasolina = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <>
        <div className='container'>FILTROS</div>
        <div className='grid grid-cols-2 gap-2'>
          <div className='col-span-1 p-10 bg-white rounded'>
            <SimpleMap />
          </div>
          <div className='grid grid-cols-2 grid-rows-3 gap-2 py-10'>
            <MapCard
              direccion='sdfsdfsgsdgdsg'
              gasoleo={7}
              gasolina95={67}
              updatedAt='jksbdffhjsdkdfsb'
            />
            <MapCard
              direccion='sdfsdfsdgsdgdsg'
              gasoleo={7}
              gasolina95={67}
              updatedAt='jksbdffhjsdkdfsb'
            />
            <MapCard
              direccion='sdfsdfsdgsdgdsg'
              gasoleo={7}
              gasolina95={67}
              updatedAt='jksbdffhjsdkdfsb'
            />
            <MapCard
              direccion='sdfsdfsdgsdgdsg'
              gasoleo={7}
              gasolina95={67}
              updatedAt='jksbdffhjsdkdfsb'
            />
            <MapCard
              direccion='sdfsdfsdgsdgdsg'
              gasoleo={7}
              gasolina95={67}
              updatedAt='jksbdffhjsdkdfsb'
            />
          </div>
        </div>
      </>
    );
  } else {
    return <h1></h1>;
  }
};

export default Gasolina;
