import { api } from "./api";

export const register = async data => {
    const response = await api.post('/api/users/register', data);
    return response.data;
};

export const login = async data => {
    const response = await api.post('/api/users/login', data);
    return response.data;
};

export const getCurrent = async () => {
    const response = await api.get('/api/users/current');
    return response.data;
};

export const logout = async () => {
    const response = await api.post('/api/users/logout');
    return response.data;
};
