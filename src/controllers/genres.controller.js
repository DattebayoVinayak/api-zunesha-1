import { axiosInstance } from '../services/axiosInstance';
import { validationError } from '../utils/errors';
import { extractGenres } from '../extractor/extractGenres';

const genresController = async () => {
  const result = await axiosInstance('/home');

  if (!result.success) {
    throw new validationError(result.message);
  }
  const response = extractGenres(result.data);
  return response;
};

export default genresController;
