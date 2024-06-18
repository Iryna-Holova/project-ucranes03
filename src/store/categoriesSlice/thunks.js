import { createAsyncThunk } from '@reduxjs/toolkit';

import { getCategories } from 'services/categories';
export const fetchCategories = createAsyncThunk(
  'categories/getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getCategories();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
