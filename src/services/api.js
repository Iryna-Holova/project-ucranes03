import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://goit-node-final-be.onrender.com',
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
