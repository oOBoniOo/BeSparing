import React from 'react';
import GoogleMapReact from 'google-map-react';

// Cuando tengamos datos, introduciremos marcadores ene l mapa
const Marker = ({ lat, lng, text }) => <div>{text}</div>;

const defaultProps = {
  center: {
    lat: 40.33,
    lng: -3.87,
  },
  zoom: 13,
};
const mKey = process.env.MAP_KEY;

const SimpleMap = () => {
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: mKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}>
        <Marker lat lng text='My Marker' />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
