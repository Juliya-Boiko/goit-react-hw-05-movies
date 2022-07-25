import { customAxios } from './axios';
import { toast } from 'react-toastify';

export const getReviews = async id => {
  try {
    const response = await customAxios.get(`/movie/${id}/reviews`);
    return response;
  } catch (error) {
    toast('Sorry, backend error', {});
  }
};
