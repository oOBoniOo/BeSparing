import { UserProfile } from '@auth0/nextjs-auth0';
import axios from 'axios';

export const apiClient = axios.create({ baseURL: 'http://localhost:1234/api' });

export const addUser = async (user: UserProfile) => {
  console.log(user);
  const { sub } = user;
  console.log(sub);
  const res = await apiClient.post('/add', { userid: sub });
  console.log(res);
};

export const checkUser = async () => {};
