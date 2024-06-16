import { createAsyncThunk } from '@reduxjs/toolkit';

import { getCurrent, register, login, logout } from 'services/user';
import { setToken, clearToken } from 'services/api';
import { showError } from 'helpers/notification';

export const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    if (!token) {
      return rejectWithValue('Token not found');
    }
    try {
      setToken(token);
      const user = await getCurrent();
      return user;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const resp = await register(credentials);
      setToken(resp.token);
      return resp;
    } catch (error) {
      showError(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const resp = await login(credentials);
      setToken(resp.token);
      return resp;
    } catch (error) {
      showError(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await logout();
      clearToken();
      return response;
    } catch (error) {
      showError(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
