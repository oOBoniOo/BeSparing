import axios from 'axios';

export const apiClient = axios.create({ baseURL: 'http://0.0.0.0:1234/api' });

export const provincias = async () => {
  const res = await apiClient.get('api/provapi');
  return res.data;
};
