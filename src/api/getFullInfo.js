import { customAxios } from './axios';
import { toast } from 'react-toastify';

export const getFullInfo = async id => {
  try {
    const response = await customAxios.get(`/movie/${id}`);
    return response;
  } catch (error) {
    toast.error('Sorry, backend error', {});
  }
};
