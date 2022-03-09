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
  const gens = await apiClient.get(`/car/generaciones?marca=${marca}&modelo=${modelo}`);
  return gens.data.data;
};

export const getVersions = async (marca: string, modelo: string, generacion: string) => {
  const versions = await apiClient.get(
    `/car/versiones?marca=${marca}&modelo=${modelo}&generacion=${generacion}`,
  );
  return versions.data.data;
};

export const createCarOnDB = async (data) => {
  const res = await apiClient.post(`/car/update`, data);
  return res;
};

export const updateCarOnDB = async (data) => {
  const res = await apiClient.post(`/car/update`, data);
  return res;
};

export const getCar = async (
  marca: string,
  modelo: string,
  generacion: string,
  version: string,
) => {
  const res = await apiClient.get(
    `/car/data?marca=${marca}&modelo=${modelo}&generacion=${generacion}&version=${version}`,
  );
  return res.data.data ? res.data.data[0] : {};
};
// export const getByProvCod = async (id: number) => {
//   const stations = await apiClient.get(`/stations/provincia/${id}`);
//   return stations.data.stations;
// };
