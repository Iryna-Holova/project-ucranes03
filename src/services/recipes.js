import { api } from './api';

export const getRecipe = id => api.get(`/api/recipes/details/${id}`);

export const getRecipes = () => api.get('/api/recipes');

export const getPopularRecipes = () => api.get('/api/recipes/popular');

export const getFavoriteRecipes = () => api.get('/api/recipes/favorite');

export const getOwnRecipes = () => api.get('/api/recipes/own');

export const removeOwnRecipe = id => api.delete(`/api/own/${id}`);

export const addFavorite = id => api.patch(`/api/recipes/addFavorite/${id}`);

export const removeFavorite = id =>
  api.patch(`/api/recipes/removeFavorite/${id}`);
