import React from 'react';
import GoogleMapReact from 'google-map-react';
import { IoLocation } from 'react-icons/io5';
import PropTypes from 'prop-types';
// Cuando tengamos datos, introduciremos marcadores ene l mapa
const Marker = ({ key, lat, lng, text }) => <IoLocation color='red' fontSize={30} />;

const mKey = process.env.MAP_KEY;

const SimpleMap = ({ coordenadas, gasolineras }) => {
  console.log(gasolineras);
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100vh' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: mKey }}
        defaultCenter={coordenadas}
        center={coordenadas}
        defaultZoom={10}>
        <Marker key={1111111111111111} lat={40.3915} lng={-3.676639} text='hola' />
        {gasolineras.map((gas) => {
          console.log('GASOLINERA', gas.location.coordinates);
          return (
            <Marker
              key={gas._id}
              lat={gas.location.coordinates[0]}
              lng={gas.location.coordinates[1]}
              text='hola'
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;

SimpleMap.propTypes = {
  coordenadas: PropTypes.object,
  gasolineras: PropTypes.array,
};
