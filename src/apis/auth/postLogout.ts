import { fetchInstance } from '@/apis';

export type ResponseSuccessProps = {
  message: string;
  data: string;
};

const postLogoutPath = () => '/api/logout';

export const postLogout = async (): Promise<ResponseSuccessProps> => {
  const response = await fetchInstance.patch(postLogoutPath());
  return response.data;
};
