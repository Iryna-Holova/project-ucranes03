import { createAsyncThunk } from "@reduxjs/toolkit";

import { getCurrent, register, login, logout } from "../../services/api";

export const fetchCurrentUser = createAsyncThunk(
    "user/fetchCurrentUser",
    async (_, { rejectWithValue }) => {
        try {
            const user = await getCurrent();
            return user;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const registerUser = createAsyncThunk(
    "user/registerUser",
    async (credentials, { rejectWithValue }) => {
        try {
            const user = await register(credentials);
            return user;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


export const loginUser = createAsyncThunk(
    "user/login",
    async (credentials, { rejectWithValue }) => {
        try {
            const user = await login(credentials);
            return user;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const logoutUser = createAsyncThunk(
    "user/logout",
    async (_, { rejectWithValue }) => {
        try {
            const response = await logout();
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
