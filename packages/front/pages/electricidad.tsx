import React from 'react';
import { useSelector } from 'react-redux';
import EData from '../components/electricidad/ElectDataProvider';
import { iUserData } from '../lib/redux/userStore';

const Electricidad = () => {
  const userState = useSelector((state: iUserData) => state);

  if (userState._id) {
    return (
      <div style={{ position: 'relative', height: '80vh', width: '80vw' }}>
        <EData />
      </div>
    );
  } else {
    return <h2>Por favor, logeate para ver los datos.</h2>;
  }
};
export default Electricidad;
