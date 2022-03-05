import axios from 'axios';

export const apiClient = axios.create({ baseURL: 'http://127.0.0.1:1234/api' });

export const getAuts = async () => {
  const autonomias = await apiClient.get(`/aut`);
  console.log('RESULTADO API FRON', autonomias.data.autonomias);
  return autonomias.data.autonomias;
};

export const getProvsPerAut = async (autid: string) => {
  const stations = await apiClient.get(`/prov/porautonomia?aut=${autid}`);
  return stations.data.stations;
};

export const getMunsPerProv = async (provid: string) => {
  const stations = await apiClient.get(`/mun/porprovincia?prov=${provid}`);
  return stations.data.stations;
};

export const getMuns = async () => {
  const muns = await apiClient.get(`/mun`);
  //const lista = muns.data.municipios.map((e) => e.nombre);
  console.log('RESPUESTA DE LA API', muns);
  return muns.data.municipios;
};

export const getMunsMatch = async (nombre: string) => {
  const muns = await apiClient.get(`/mun/match?nombre=${nombre}`);
  const lista = muns.data.municipios.map((e) => e.nombre);
  return lista;
};
