import { customAxios } from './axios';

// FULL FILM INFO --- baseURL: `https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US`

export const getFullInfo = async id => {
  try {
    const response = await customAxios.get(`/movie/${507086}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
