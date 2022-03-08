import axios from 'axios';

export const apiClient = axios.create({ baseURL: 'http://127.0.0.1:1234/api' });

const compareGas = (a, b) => {
  if (a.gasoleo < b.gasoleo) {
    return -1;
  }
  if (a.gasoleo > b.gasoleo) {
    return 1;
  }
  return 0;
};

const compare95 = (a, b) => {
  if (a.gasolina_95 < b.gasolina_95) {
    return -1;
  }
  if (a.gasolina_95 > b.gasolina_95) {
    return 1;
  }
  return 0;
};

export const getNearStations = async (lat, lng) => {
  const stations = await apiClient.get(`/stations?long=${lng}&lat=${lat}`);
  console.log('desde el api front', stations.data.stations);
  let nearStationsList = stations.data.stations.sort(compareGas);
  nearStationsList = stations.data.stations.sort(compare95);
  nearStationsList = nearStationsList.filter((stat) => {
    return stat.gasoleo != 0 || stat.gasolina_95 != 0;
  });
  return nearStationsList;
};

export const getByCodeStations = async (cp) => {
  const stations = await apiClient.get(`/stations?cp=${cp}`);
  console.log('desde el api front', stations.data.stations);
  return stations.data.stations;
};

export const getByCity = async (nombre: string) => {
  const stations = await apiClient.get(`/stations/municipio?${nombre}`);
  return stations.data.stations;
};

export const getByAutCod = async (id: number) => {
  const stations = await apiClient.get(`/stations/autonomia/${id}`);
  return stations.data.stations;
};

export const getByProvCod = async (id: number) => {
  const stations = await apiClient.get(`/stations/provincia/${id}`);
  return stations.data.stations;
};
