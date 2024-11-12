import { fetchInstance } from '@/apis/instance';

import { useQuery } from '@tanstack/react-query';

export type fetchDataResponseProps = {
  username: string;
  image_url: string;
};

const fetchMyDataPath = () => '/api/me/profile';

const fetchMyData = async (): Promise<fetchDataResponseProps> => {
  const response =
    await fetchInstance.get<fetchDataResponseProps>(fetchMyDataPath());
  return response.data;
};

export const useFetchMyData = () => {
  const accessToken = localStorage.getItem('accessToken');

  return useQuery<fetchDataResponseProps, Error>({
    queryKey: [fetchMyDataPath],
    queryFn: () => fetchMyData(),
    staleTime: 1000 * 60 * 5,
    enabled: !!accessToken,
  });
};
