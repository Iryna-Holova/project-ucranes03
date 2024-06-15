import { createAsyncThunk } from '@reduxjs/toolkit';
import { showError } from 'helpers/notification';

import { getTestimonials } from 'services/testimonials';

export const fetchTestimonials = createAsyncThunk(
  'ingredients/fetchTestimonials',
  async (_, { rejectWithValue }) => {
    try {
      // const data = await getTestimonials();
      throw Error('bububu')
      // return data;
    } catch (error) {
      showError(error);
      return rejectWithValue(error);
    }
  }
);
