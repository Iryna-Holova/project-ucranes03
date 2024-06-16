import { api } from './api';

export const getRecipe = id => api.get(`/api/recipes/details/${id}`);

export const getRecipes = ({
  page,
  limit,
  category,
  ingredient,
  area,
} = {}) => {
  return api.get('/api/recipes', {
    params: { page, limit, category, ingredient, area },
  });
};

export const getPopularRecipes = () => api.get('/api/recipes/popular');

export const getFavoriteRecipes = ({ page } = {}) =>
  api.get('/api/recipes/favorite', {
    params: { page, limit: 9 },
  });

export const getOwnRecipes = ({ page } = {}) =>
  api.get('/api/recipes/own', {
    params: { page, limit: 9 },
  });

export const getUserRecipes = ({ page } = {}, id) =>
  api.get(`/api/recipes/own/${id}`, {
    params: { page, limit: 9 },
  });

export const removeOwnRecipe = id => api.delete(`/api/own/${id}`);

export const addFavorite = id => api.patch(`/api/recipes/addFavorite/${id}`);

export const removeFavorite = id =>
  api.patch(`/api/recipes/removeFavorite/${id}`);

export const addRecipe = data =>
  api.post('/api/recipes/own', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
