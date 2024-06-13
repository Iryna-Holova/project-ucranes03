import { createAsyncThunk } from "@reduxjs/toolkit";

import { getCurrent, register, login, logout } from "../../services/api";
import { setToken, clearToken } from "../../services/api";

export const fetchCurrentUser = createAsyncThunk(
    "user/fetchCurrentUser",
    async (_, { rejectWithValue }) => {
        try {
            const resp = await getCurrent();
            return resp;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const registerUser = createAsyncThunk(
    "user/registerUser",
    async (credentials, { rejectWithValue }) => {
        try {
            const resp = await register(credentials);
            setToken(resp.token);
            return resp;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);


export const loginUser = createAsyncThunk(
    "user/login",
    async (credentials, { rejectWithValue }) => {
        try {
            const resp = await login(credentials);
            setToken(resp.token);
            return resp;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const logoutUser = createAsyncThunk(
    "user/logout",
    async (_, { rejectWithValue }) => {
        try {
            const response = await logout();
            clearToken();
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
