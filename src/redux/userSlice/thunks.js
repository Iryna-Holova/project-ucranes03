import { createAsyncThunk } from "@reduxjs/toolkit";

import { getCurrent, register } from "../../services/api";

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
