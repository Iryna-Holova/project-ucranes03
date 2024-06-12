import { createSlice } from '@reduxjs/toolkit';
import { fetchPopular, fetchFavorite } from './thunks';

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    popular: [],
    favorite: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPopular.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchPopular.fulfilled, (state, action) => {
        state.isLoading = false;
        state.popular = action.payload;
      })
      .addCase(fetchPopular.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(fetchFavorite.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favorite = action.payload;
      })
      .addCase(fetchFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const recipesReducer = recipesSlice.reducer;
