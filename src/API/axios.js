import axios from 'axios';

const API_KEY = '39bf866453609a0bc24965bcd414ff90';
const BASE_URL = 'https://api.themoviedb.org/3';

export const customAxios = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});
