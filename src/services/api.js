import axios from "axios";

const api = axios.create({
    baseURL: "https://goit-node-final-be.onrender.com/",
    headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("__token__"),
    },
});

export const register = async (data) => {
    try {

        const response = await api.post("/api/users/register", data);
    return response.data;
    } catch (error) {
        return error.response.data; // todo error handling
    }
};

export const login = async (data) => {
    try {
        const response = await api.post("/api/users/login", data);
        return response.data;
    } catch (error) {
        return error.response.data; // todo error handling
    }
};

export const getCurrent = async () => {
    try {
        const response = await api.get("/api/users/current");
        return response.data;
    } catch (error) {
        return error.response.data; // todo error handling
    }
};

export const logout = async () => {
    try {
        const response = await api.post("/api/users/logout");
        return response.data;
    } catch (error) {
        return error.response.data; // todo error handling
    }
};
