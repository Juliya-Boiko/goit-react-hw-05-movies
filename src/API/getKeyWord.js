import { customAxios } from './axios';

export const getKeyWord = async query => {
  try {
    const response = await customAxios.get('/search/movie', {
      params: query,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
