import React, { useEffect, useState } from 'react';
import { getGen, getMarcas, getModelos, getVersions, getCar } from '../../lib/api/carsRequests';
import { UpdateCar } from '../forms/UpdateCar';
import { ItemSelect } from './ItemSelect';
import { TarjetaCar } from './TarjetaCar';

// Este componente es un selector que solo usaremos para el update de la info del usuario
// Usare un estado unico del componente puesto que no voy a neceistar esta info fuera.

export const CascadeSelect = ({}) => {
  const [state, setState] = useState({
    marca: 'Marca',
    modelo: 'Modelo',
    generacion: 'Generacion',
    version: 'Version',
    marcasData: [],
    modelosData: [],
    gensData: [],
    versionsData: [],
    carData: {},
  });

  useEffect(() => {
    marcasIni();
  }, []);

  const marcasIni = async () => {
    const marcas = await getMarcas();
    setState({ ...state, marcasData: marcas });
  };

  useEffect(() => {
    modelosIni();
  }, [state.marca]);

  const changeMarca = (e) => {
    setState({ ...state, marca: e.target.value });
  };
  const modelosIni = async () => {
    const modelos = await getModelos(state.marca);
    setState({ ...state, modelosData: modelos });
  };

  useEffect(() => {
    gensIni();
  }, [state.modelo]);

  const changeModelo = (e) => {
    setState({ ...state, modelo: e.target.value });
  };
  const gensIni = async () => {
    const gens = await getGen(state.marca, state.modelo);
    console.log(state.marca, state.modelo, 'GENERACIONES: ', gens);
    setState({
      ...state,
      gensData: gens,
    });
  };

  useEffect(() => {
    versIni();
  }, [state.generacion]);

  const changeGeneracion = (e) => {
    setState({ ...state, generacion: e.target.value });
  };
  const versIni = async () => {
    const vers = await getVersions(state.marca, state.modelo, state.generacion);
    setState({
      ...state,
      versionsData: vers,
    });
  };

  useEffect(() => {
    updateUser();
  }, [state.version]);

  const changeVersion = (e) => {
    setState({ ...state, version: e.target.value });
  };

  const updateUser = async () => {
    console.log(state.marca, state.modelo, state.generacion, state.version);
    const data = await getCar(state.marca, state.modelo, state.generacion, state.version);
    console.log('EN UPDATEUSER', data);
    setState({
      ...state,
      carData: data,
    });
  };

  const modifyCar = () => {};

  return (
    <div>
      <ItemSelect lista={state.marcasData} funcion={changeMarca} seleccion={state.marca} />
      {state.marca && (
        <ItemSelect lista={state.modelosData} funcion={changeModelo} seleccion={state.modelo} />
      )}
      {state.modelo && (
        <ItemSelect
          lista={state.gensData}
          funcion={changeGeneracion}
          seleccion={state.generacion}
        />
      )}
      {state.generacion && (
        <ItemSelect lista={state.versionsData} funcion={changeVersion} seleccion={state.version} />
      )}
      {state.version != 'Version' && state.carData && <TarjetaCar state={state} />}

      {state.version && !state.carData && <UpdateCar />}
    </div>
  );
};
