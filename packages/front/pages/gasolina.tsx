import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Cabecera } from '../components/map/Cabecera';
import { List } from '../components/map/List';
import Mapa from '../components/map/Mapa';
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
      const gasStations = await getNearStations(
        coordinates[1],
        coordinates[0],
        userState.carbData.tipo,
      );
      const bestStations = gasStations.slice(0, 9);
      setGasolineras(bestStations);
    }
  };

  if (userState._id != '' && userState.municipio != '') {
    return (
      <div className='relative flex items-center justify-center w-full h-full'>
        <Cabecera userState={userState} />
        <List gasolineras={gasolineras} userState={userState} />
        <Mapa coordenadas={coordenadas} gasolineras={gasolineras} />
      </div>
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
