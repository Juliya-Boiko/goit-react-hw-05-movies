import axios from 'axios';
import { API_KEY } from 'constants/constants';
import { BASE_URL } from 'constants/constants';

export const customAxios = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});
