import { createSlice } from '@reduxjs/toolkit';
import { fetchAreas } from './thunks';

export const areasSlice = createSlice({
  name: 'areas',
  initialState: {
    areas: [],
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAreas.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAreas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.areas = action.payload.data;
      })
      .addCase(fetchAreas.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const areasReducer = areasSlice.reducer;
