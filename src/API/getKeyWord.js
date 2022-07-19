import { customAxios } from './axios';

// baseURL: `https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false`,

export const searchParams = {
  query: '',
  page: 1,
};

export const getKeyWord = async () => {
  try {
    const response = await customAxios.get('/search/movie', {
      params: searchParams,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
