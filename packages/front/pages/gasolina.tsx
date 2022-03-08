import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MapCard from '../components/map/Card';
import Mapa from '../components/map/Mapa';
import { CheckUser } from '../components/utils/CheckUser';
import { getMunById } from '../lib/api/locRequests';
import { getNearStations } from '../lib/api/stationsRequests';
import { iUserData } from '../lib/redux/userStore';

const Gasolina = () => {
  const [gasolineras, setGasolineras] = useState([]);
  const [coordenadas, setCoordenadas] = useState({ lat: 0, lng: 0 });
  const userState = useSelector((state: iUserData) => state);
  useEffect(() => {
    getCoords(userState.municipio);
  }, [userState]);

  const getCoords = async (municipio) => {
    if (municipio) {
      const res = await getMunById(municipio);

      const coordinates = res.coords.coordinates;
      setCoordenadas({ lat: coordinates[1], lng: coordinates[0] });
      console.log('RESUTL', coordenadas);

      // setCoordenadas([...coordenadas, coordinates]);
      // console.log('coordenadas', coordenadas);
      const gasStations = await getNearStations(coordinates[1], coordinates[0]);
      const bestStations = gasStations.slice(0, 9);
      setGasolineras(bestStations);
    }
  };

  if (userState._id != '' && userState.municipio != '') {
    return (
      <>
        <CheckUser />
        <div className='grid grid-cols-3 '>
          <div className='col-span-1'></div>
          <div className='col-span-2 text-lg'>
            <div className='flex flex-coltext-lg justify-items-center'>
              <div className='container text-lg'>
                <p className='text-lg'>
                  PUNTOS DE REPOSTAJE MAS ECONÓMICOS PARA TU{' '}
                  <b className='text-lg'>{userState.carbData.modelo}</b>
                </p>
              </div>
            </div>
          </div>
          <div className='col-span-3'> </div>
        </div>

        <div className='grid grid-cols-2 gap-2'>
          <div className='col-span-1 p-10 bg-white rounded'>
            <Mapa coordenadas={coordenadas} gasolineras={gasolineras} />
          </div>
          <div className='grid grid-cols-2 grid-rows-3 gap-2 py-10'>
            {gasolineras.map((gas, index) => {
              return (
                <MapCard
                  key={index}
                  direccion={gas.direccion}
                  localidad={gas.localidad}
                  gasoleo={gas.gasoleo}
                  gasolina95={gas.gasolina_95}
                  updatedAt={gas.updatedAt}
                  consumo={userState.carbData.consumo}
                  capacidad={userState.carbData.capacidad}
                  cp={gas.cp}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  } else {
    if (userState.municipio == '' && userState._id != '') {
      return <h1>Accede al area personal para intoducir tus datos</h1>;
    } else {
      return <h1>Logeate please</h1>;
    }
  }
};

export default Gasolina;
