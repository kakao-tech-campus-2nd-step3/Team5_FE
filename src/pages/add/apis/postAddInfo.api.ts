import { fetchInstance } from '@/apis';

export type AddInfoProps = {
  categories: string[];
  age: string;
  gender: string;
};

export type Category = {
  id: number;
  name: string;
};

export type AddInfoResponse = Omit<AddInfoProps, 'categories'> & {
  categories: Category[];
};

const postAddInfoPath = () => '/api/additional-info';

export const postAddInfo = async (
  info: AddInfoProps
): Promise<AddInfoResponse> => {
  const response = await fetchInstance.patch(postAddInfoPath(), info);

  return response.data;
};
