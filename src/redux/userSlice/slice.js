import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      id: null,
      email: '',
      name: '',
      avatar: null,
      subscriptions: [],
      favorites: [],
    },
    token: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = {
        id: null,
        email: '',
        name: '',
        avatar: null,
        subscriptions: [],
        favorites: [],
      };
      state.token = null;
    },
    setSubscriptions(state, action) {
      state.user.subscriptions = action.payload;
    },
    setFavorites(state, action) {
      state.user.favorites = action.payload;
    },
  },
});

export const { setUser, logout, setSubscriptions, setFavorites } = userSlice.actions;
