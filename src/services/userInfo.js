import { api } from './api';

export const getOwnInfo = () => api.get('/api/users/info');

export const getCurrentInfo = id => api.get(`/api/users/info/${id}`);
