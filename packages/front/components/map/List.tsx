import React from 'react';
import PropTypes from 'prop-types';
import MapCard from './card2';

export const List = ({ gasolineras, userState }) => {
  return (
    <div className="absolute top-0 left-0 z-10 flex flex-col w-1/3 h-screen px-2 overflow-hidden bg-zinc-100 ">
      <div className="flex flex-col flex-1 mt-16 overflow-y-scroll">
        {gasolineras.map((gas, index) => {
          return (
            <MapCard
              key={index}
              nombre={gas.nombre}
              direccion={gas.direccion}
              localidad={gas.localidad}
              precioCombustible={
                userState.carbData.tipo == 'diesel' ? gas.gasoleo : gas.gasolina_95
              }
              tipo={userState.carbData.tipo}
              updatedAt={gas.updatedAt}
              consumo={userState.carbData.consumo}
              capacidad={userState.carbData.capacidad}
              cp={gas.cp}
            />
          );
        })}
      </div>
    </div>
  );
};

List.propTypes = {
  gasolineras: PropTypes.array,
  userState: PropTypes.object,
};
