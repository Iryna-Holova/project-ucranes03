import { createSlice } from '@reduxjs/toolkit';
import { fetchIngredients } from './thunks';

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchIngredients.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ingredients = action.payload.data;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setFilter } = ingredientsSlice.actions;
export const ingredientsReducer = ingredientsSlice.reducer;
