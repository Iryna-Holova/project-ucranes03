import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://goit-node-final-be.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setToken = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  api.defaults.headers.common.Authorization = '';
};

export const register = async data => {
  try {
    const response = await api.post('/api/users/register', data);
    return response.data;
  } catch (error) {
    return error; // todo error handling
  }
};

export const login = async data => {
  try {
    const response = await api.post('/api/users/login', data);
    return response.data;
  } catch (error) {
    return error; // todo error handling
  }
};

export const getCurrent = async () => {
  try {
    const response = await api.get('/api/users/current');
    return response.data;
  } catch (error) {
    return error; // todo error handling
  }
};

export const logout = async () => {
  try {
    const response = await api.post('/api/users/logout');
    return response.data;
  } catch (error) {
    return error; // todo error handling
  }
};
