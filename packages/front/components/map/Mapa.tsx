import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { IoLocation } from 'react-icons/io5';
import PropTypes from 'prop-types';
// Cuando tengamos datos, introduciremos marcadores ene l mapa
const Marker = ({ key, lat, lng }) => (
  <div className='relative cursor-pointer'>
    <IoLocation color='red' fontSize={30} />
  </div>
);
Marker.propTypes = { key: PropTypes.string, lat: PropTypes.number, lng: PropTypes.number };

const mKey = process.env.MAP_KEY;

const SimpleMap = ({ coordenadas, gasolineras }) => {
  const [isCard, setIsCard] = useState(false);
  const [datosTarjeta, setDatosTarjeta] = useState(null);
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100em' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: mKey }}
        defaultCenter={coordenadas}
        center={coordenadas}
        defaultZoom={12}
        onChildClick={(child) => {
          setDatosTarjeta(gasolineras[child]);
          setIsCard(!isCard);
        }}>
        {gasolineras.map((gas, i) => {
          return (
            <Marker key={i} lat={gas.location.coordinates[0]} lng={gas.location.coordinates[1]} />
          );
        })}
        {isCard && (
          <div className='absolute left-0 rounded-lg shadow-lg w-34 h32 bg-rose-200 -top-3'>
            <div className='flex justify-center'>
              <div className='block max-w-sm p-6 rounded-lg shadow-lg bg-rose-200'>
                <h5 className='mb-2 text-lg font-medium leading-tight text-gray-900'>
                  {datosTarjeta.direccion}
                </h5>
                <p className='mb-4 text-base text-gray-700'>{datosTarjeta.localidad}</p>
              </div>
            </div>
          </div>
        )}
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;

SimpleMap.propTypes = {
  coordenadas: PropTypes.object,
  gasolineras: PropTypes.array,
};
