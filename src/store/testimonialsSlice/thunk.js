import { createAsyncThunk } from '@reduxjs/toolkit';

import { getTestimonials } from 'services/testimonials';

export const fetchTestimonials = createAsyncThunk(
  'ingredients/fetchTestimonials',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getTestimonials();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
