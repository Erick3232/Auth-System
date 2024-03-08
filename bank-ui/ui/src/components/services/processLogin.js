// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', // url
});

export const createUser = async (userData) => {
  try {
    const response = await api.post('/auth/processLogin', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;

