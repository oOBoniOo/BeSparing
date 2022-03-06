import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MapCard from '../components/map/Card';
import SimpleMap from '../components/map/Mapa';
import { CheckUser } from '../components/utils/CheckUser';
import { getMunById } from '../lib/api/locRequests';
import { getNearStations } from '../lib/api/stationsRequests';

const Gasolina = () => {
  // const { user, error, isLoading } = useUser();
  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;
  const [gasolineras, setGasolineras] = useState([]);
  const [coordenadas, setCoordenadas] = useState({ lat: 0, lng: 0 });
  const userState = useSelector((state) => state);
  useEffect(() => {
    getCoords(userState.municipio);
  }, [userState]);

  const getCoords = async (municipio) => {
    const res = await getMunById(municipio);

    const coordinates = res.coords.coordinates;
    setCoordenadas({ lat: coordinates[1], lng: coordinates[0] });
    console.log('RESUTL', coordenadas);

    // setCoordenadas([...coordenadas, coordinates]);
    // console.log('coordenadas', coordenadas);
    const gasStations = await getNearStations(coordinates[1], coordinates[0]);
    const bestStations = gasStations.slice(0, 9);
    setGasolineras(bestStations);
  };

  if (userState) {
    return (
      <>
        <CheckUser />
        <div className='container'>FILTROS</div>
        <div className='grid grid-cols-2 gap-2'>
          <div className='col-span-1 p-10 bg-white rounded'>
            <SimpleMap
              setCoordenadas={setCoordenadas}
              coordenadas={coordenadas}
              gasolineras={gasolineras}
            />
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
                />
              );
            })}
          </div>
        </div>
      </>
    );
  } else {
    return <h1>Logeate please</h1>;
  }
};

export default Gasolina;
