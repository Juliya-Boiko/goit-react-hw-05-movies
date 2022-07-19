import { customAxios } from './axios';

// TRENDING --- baseURL: `https://api.themoviedb.org/3/trending/movie/day?api_key=39bf866453609a0bc24965bcd414ff90`,

export const getTrending = async () => {
  try {
    const response = await customAxios.get('/trending/movie/day');
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
  }
};
