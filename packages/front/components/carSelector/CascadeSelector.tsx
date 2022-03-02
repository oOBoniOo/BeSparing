import React, { useEffect, useState } from 'react';
import { getGen, getMarcas, getModelos, getVersions } from '../../lib/api/carsRequests';
import { ItemSelect } from './ItemSelect';

export const CascadeSelect = ({}) => {
  const [state, setState] = useState({
    marca: '',
    modelo: '',
    generacion: '',
    version: '',
    marcasData: ['a', 'b', 'c'],
    modelosData: [],
    gensData: [],
    versionsData: [],
  });
  useEffect(() => {
    console.log(state);
    console.log('marcas', state.marcasData);
    setState({ ...state, marcasData: getMarcas().then((e) => e) });
  }, []);

  const changeModeloData = (e) => {
    setState({ ...state, marca: e.target.value, modelosData: getModelos(e.target.vaule) });
  };

  const changeGenData = (e) => {
    const marc = state.marca;
    setState({
      ...state,
      modelo: e.target.value,
      gensData: getGen(marc, e.target.vaule),
    });
  };

  const changeVerData = (e) => {
    const marc = state.marca;
    const mod = state.modelo;
    setState({
      ...state,
      generacion: e.target.value,
      versionsData: getVersions(marc, mod, e.target.vaule),
    });
  };

  const setChanges = () => {};

  return (
    <div>
      <ItemSelect lista={state.marcasData} funcion={changeModeloData} />
      {state.marca && <ItemSelect lista={state.modelosData} funcion={changeGenData} />}
      {state.modelo && <ItemSelect lista={state.gensData} funcion={changeVerData} />}
      {state.generacion && <ItemSelect lista={state.versionsData} funcion={setChanges} />}
    </div>
  );
};
