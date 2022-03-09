// import { UserProfile } from '@auth0/nextjs-auth0';
import axios from 'axios';

export const apiClient = axios.create({ baseURL: 'http://127.0.0.1:1234' });

export const addUserDB = async (user) => {
  const res = await apiClient.post('/api/user/add', user);
  return res;
};

export const checkUserDB = async (email) => {
  const res = await apiClient.get(`/api/user/find?email=${email}`);
  return res.data.res;
};

export const checkUserById = async (id) => {
  const res = await apiClient.get(`/api/user/find?_id=${id}`);
  return res.data.res;
};

export const updateUserOnDB = async (data) => {
  const res = await apiClient.post(`/api/user/update`, data);
  return res;
};
