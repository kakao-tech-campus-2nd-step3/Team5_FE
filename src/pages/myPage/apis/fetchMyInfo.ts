import { fetchInstance } from '@/apis/instance/Instance.api';

import { useQuery, UseQueryResult } from '@tanstack/react-query';

export interface MyInfoResponse {
  gender: string;
  age: string;
  categories: {
    id: number;
    name: string;
  }[];
}

export const fetchMyInfo = async (): Promise<MyInfoResponse> => {
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) {
    throw new Error('Access-Token 이 존재하지 않습니다.');
  }

  const response = await fetchInstance.get<MyInfoResponse>('/api/me', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
};

export const useFetchMyInfo = (): UseQueryResult<MyInfoResponse, Error> => {
  return useQuery<MyInfoResponse, Error, MyInfoResponse>({
    queryKey: ['myInfo'],
    queryFn: fetchMyInfo,
    staleTime: 1000 * 60 * 5,
  });
};
