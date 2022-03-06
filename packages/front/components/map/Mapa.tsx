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
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: mKey }}
        defaultCenter={coordenadas}
        center={coordenadas}
        defaultZoom={10}>
        {gasolineras.map((gas) => {
          console.log('GASOLINERA', gas.location.coordinates);
          return (
            <Marker
              key={gas._id}
              lat={gas.location.coordinates[1]}
              lng={gas.location.coordinates[0]}
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
