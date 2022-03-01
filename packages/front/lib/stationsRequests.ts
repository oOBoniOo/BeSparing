import axios from 'axios';

export const apiClient = axios.create({ baseURL: 'http://127.0.0.1:1234/api' });

export const getNearStations = async (lat, lng) => {
  const stations = await apiClient.get(`/stations?long=${lng}&lat=${lat}`);
  console.log('desde el api front', stations.data.stations);
  return stations.data.stations;
};

export const getByCodeStations = async (cp) => {
  const stations = await apiClient.get(`/stations?cp=${cp}`);
  console.log('desde el api front', stations.data.stations);
  return stations.data.stations;
};
