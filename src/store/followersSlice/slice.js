import { createSlice } from '@reduxjs/toolkit';
import { fetchFollowers } from './thunk';

export const followersSlice = createSlice({
  name: 'followres',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchFollowers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFollowers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchFollowers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const followersReducer = followersSlice.reducer;
