import { api } from './api';

export const getOwnInfo = () => api.get('/api/users/info');

export const getInfo = id => api.get(`/api/users/info/${id}`);

export const updateAvatar = formData =>
  api.patch(`/api/users/avatars`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
