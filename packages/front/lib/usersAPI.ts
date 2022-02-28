import axios from 'axios';

export const apiClient = axios.create({ baseURL: 'http://0.0.0.0:1234/api' });

export const addUser = async (user) => {
  console.log(user);
  const res = await apiClient.post(`/user/add?id=${user.sub}`);
  console.log(res);
};

export const checkUser = async () => {};
