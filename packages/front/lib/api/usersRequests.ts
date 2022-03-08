// import { UserProfile } from '@auth0/nextjs-auth0';
import axios from 'axios';

export const apiClient = axios.create({ baseURL: 'http://127.0.0.1:1234/api' });

export const addUserDB = async (user) => {
  // console.log(user);
  // const { email } = user;
  // console.log('USER ID ES : ', email);
  const res = await apiClient.post('/user/add', user);
  console.log('EN FRONT DESPUES DE LLAMADA A API');
  return res;
};

export const checkUserDB = async (email) => {
  const res = await apiClient.get(`/user/find?email=${email}`);
  console.log('ESTADO RESPUESTA FIND', res.status);
  return res.data.res;
};

export const checkUserById = async (id) => {
  const res = await apiClient.get(`/user/find?_id=${id}`);
  return res.data.res;
};

export const updateUserOnDB = async (data) => {
  console.log('DATOS EN API-FRONT', data);
  const res = await apiClient.post(`/user/update`, data);
  return res;
};
