import { createSlice } from '@reduxjs/toolkit';
import { fetchTestimonials } from './thunk';

export const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTestimonials.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTestimonials.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchTestimonials.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const testimonialsReducer = testimonialsSlice.reducer;
