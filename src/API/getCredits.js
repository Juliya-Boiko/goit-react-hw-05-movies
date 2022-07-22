import { customAxios } from './axios';

export const getCredits = async id => {
  try {
    const response = await customAxios.get(`/movie/${id}/credits`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
