import { customAxios } from './axios';

export const getTrending = async () => {
  try {
    const response = await customAxios.get('/trending/movie/day');
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
  }
};
