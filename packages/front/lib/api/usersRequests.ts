import { UserProfile } from '@auth0/nextjs-auth0';
import axios from 'axios';

export const apiClient = axios.create({ baseURL: 'http://127.0.0.1:1234/api' });

export const addUserDB = async (user: UserProfile) => {
  console.log(user);
  const { sub } = user;
  console.log('USER ID ES : ', sub);
  const res = await apiClient.post('/add', { userid: sub });
  return res;
};

export const checkUserDB = async (email) => {
  const res = await apiClient.get(`/user/find?email=${email}`);
  return res.data.res;
};

export const updateUserOnDB = async (_id) => {
  const res = await apiClient.patch(`/update/${_id}`);
  return res;
};
