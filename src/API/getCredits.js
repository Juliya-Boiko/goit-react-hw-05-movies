import { customAxios } from './axios';

// baseURL: `https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US`

export const getCredits = async id => {
  try {
    const response = await customAxios.get(`/movie/${id}/credits`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
