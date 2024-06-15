import { api } from './api';

export const getFollowings = ({ page, limit } = {}) =>
  api.get('/api/users/following', {
    params: { page, limit },
  });

export const removeFromFollowing = id =>
  api.patch(`/api/users/removeFollowing/${id}`);

export const addToFollowing = id =>
  api.patch(`/api/users/addFollowing/${id}`);


export const getFollowers = ({ page, limit } = {}) =>
  api.get('/api/users/followers', {
    params: { page, limit },
  });
