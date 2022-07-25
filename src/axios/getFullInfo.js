import { customAxios } from './axios';

export const getFullInfo = async id => {
  try {
    const response = await customAxios.get(`/movie/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
