import { api } from './api';
export const getCategories = async() => await api.get('/api/categories');


