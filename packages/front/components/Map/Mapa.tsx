import React from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ lat, lng, text }) => <div>{text}</div>;

const defaultProps = {
  center: {
    lat: 40.33,
    lng: -3.87,
  },
  zoom: 13,
};

const SimpleMap = () => {
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyASdnEi1o7fFBbVA5VaeJiNV8hrDBX9is0' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}>
        <Marker lat lng text='My Marker' />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
