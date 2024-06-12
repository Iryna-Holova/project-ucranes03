import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAreas } from '../../services/areas';

export const fetchAreas = createAsyncThunk(
  'area/fetchAreas',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAreas();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
