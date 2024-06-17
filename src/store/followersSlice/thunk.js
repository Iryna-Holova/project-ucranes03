import { createAsyncThunk } from '@reduxjs/toolkit';
import { showError } from 'helpers/notification';

import { getFollowers } from 'services/followers';

export const fetchFollowers = createAsyncThunk(
  'ingredients/fetchFollowers',
  async (arg, { rejectWithValue }) => {
    try {
      const {data} = await getFollowers(arg.user, arg.pagination);
      debugger
      return data.results;
    } catch (error) {
      showError(error);
      return rejectWithValue(error);
    }
  }
);
