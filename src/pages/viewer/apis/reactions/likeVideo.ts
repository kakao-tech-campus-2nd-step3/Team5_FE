import { fetchInstance } from '@/apis/instance/Instance.api';

import { useMutation, UseMutationResult } from '@tanstack/react-query';

export interface LikeVideoParams {
  videoId: number;
  memberId: number;
}

export const likeVideo = async ({
  videoId,
  memberId,
}: LikeVideoParams): Promise<void> => {
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) {
    throw new Error('Access-Token 이 존재하지 않습니다.');
  }

  await fetchInstance.post(`/api/videos/${videoId}/reactions/like`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      memberId: memberId,
    },
  });
};

export const useLikeVideo = (): UseMutationResult<
  void,
  Error,
  LikeVideoParams
> => {
  return useMutation<void, Error, LikeVideoParams>({
    mutationFn: likeVideo,
  });
};
