import { createAsyncThunk } from '@reduxjs/toolkit';

import { getPopular, getFavorite } from 'services/recipes';

export const fetchPopular = createAsyncThunk(
  'recipes/fetchPopular',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getPopular();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchFavorite = createAsyncThunk(
  'recipes/fetchFavorite',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getFavorite();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
