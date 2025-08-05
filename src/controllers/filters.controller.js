import { extractFilterData } from '../extractor/extractFIlterData';
import { axiosInstance } from '../services/axiosInstance';
import { NotFoundError, validationError } from '../utils/errors';

const filterController = async (c) => {

  const endpoint = `/search?keyword=sample`;
  const result = await axiosInstance(endpoint);

  if (!result.success) {
    throw new validationError('make sure given endpoint is correct');
  }

  const response = extractFilterData(result.data);

  if (!response) {
    throw new NotFoundError('no response');
  }

  return response;
};

export default filterController;
