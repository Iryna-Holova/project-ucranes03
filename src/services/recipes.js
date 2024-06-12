import { api } from './api';

export const getPopular = () => api.get('/api/recipes/popular');
export const getFavorite = () => api.get('/api/recipes/favorite');
