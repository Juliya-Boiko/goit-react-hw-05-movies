import { customAxios } from './axios';

// baseURL: `https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1`

export const getReviews = async id => {
  try {
    const response = await customAxios.get(`/movie/${id}/reviews`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
