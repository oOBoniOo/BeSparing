import axios from 'axios';

const apiClient = axios.create({ baseURL: 'http://127.0.0.1:1234/api' });

export const getMarcas = async () => {
  const marcas = await apiClient.get(`/car/marcas`);
  return marcas.data.data;
};

export const getModelos = async (marca: string) => {
  const modelos = await apiClient.get(`/car/modelos?marca=${marca}`);
  return modelos.data.data;
};

export const getGen = async (marca: string, modelo: string) => {
  const stations = await apiClient.get(`/car/generaciones?marca=${marca}modelo=${modelo}`);
  return stations.data.stations;
};

export const getVersions = async (marca: string, modelo: string, generacion: string) => {
  const stations = await apiClient.get(
    `/car/versiones?marca=${marca}&modelo=${modelo}&generacion=${generacion}`,
  );
  return stations.data.stations;
};

// export const getByProvCod = async (id: number) => {
//   const stations = await apiClient.get(`/stations/provincia/${id}`);
//   return stations.data.stations;
// };
