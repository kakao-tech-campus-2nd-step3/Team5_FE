import { fetchInstace } from '@/apis';

export type AddInfoProps = {
  categories: string[];
  age: string;
  gender: string;
};

export type Category = {
  id: number;
  name: string;
};

const postAddinfoPath = () => '/api/additional-info';

export const postAddInfo = async <T extends AddInfoProps>(
  info: T
): Promise<Omit<T, 'categories'> & { categories: Category[] }> => {
  const response = await fetchInstace.post(postAddinfoPath(), info);

  return response.data;
};
