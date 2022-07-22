import { customAxios } from './axios';

export const getReviews = async id => {
  try {
    const response = await customAxios.get(`/movie/${id}/reviews`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
