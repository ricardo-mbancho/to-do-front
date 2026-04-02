import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL
});

export const fetchTasks = () => api.get('/tasks');
export const createTask = (title: string) =>
  api.post('/tasks', { title })