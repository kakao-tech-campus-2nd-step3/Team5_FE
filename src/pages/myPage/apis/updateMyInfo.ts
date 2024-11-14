import { fetchInstance } from '@/apis/instance/Instance.api';

import { useMutation, UseMutationResult } from '@tanstack/react-query';

export interface UpdateMyInfoParams {
  gender: string;
  age: string;
  categories: number[];
}

export interface UpdateMyInfoResponse {
  gender: string;
  age: string;
  categories: {
    id: number;
    name: string;
  }[];
}

export const updateMyInfo = async (
  data: UpdateMyInfoParams
): Promise<UpdateMyInfoResponse> => {
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) {
    throw new Error('Access-Token 이 존재하지 않습니다.');
  }

  const response = await fetchInstance.put<UpdateMyInfoResponse>(
    '/api/me',
    data,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data;
};

export const useUpdateMyInfo = (): UseMutationResult<
  UpdateMyInfoResponse,
  Error,
  UpdateMyInfoParams
> => {
  return useMutation<UpdateMyInfoResponse, Error, UpdateMyInfoParams>({
    mutationFn: (data: UpdateMyInfoParams) => updateMyInfo(data),
    onSuccess: (data: UpdateMyInfoResponse) => {
      console.log('정보가 성공적으로 업데이트되었습니다:', data);
    },
    onError: (error: Error) => {
      console.error('정보 업데이트에 실패하였습니다:', error);
    },
  });
};
