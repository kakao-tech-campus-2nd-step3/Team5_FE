import { fetchInstance } from '@/apis/instance/Instance.api';

import { useMutation, UseMutationResult } from '@tanstack/react-query';

export interface DeleteCommentParams {
  videoId: number;
  commentId: number;
}

export const deleteComment = async ({
  videoId,
  commentId,
}: DeleteCommentParams): Promise<string> => {
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) {
    throw new Error('Access-Token 이 존재하지 않습니다.');
  }

  const response = await fetchInstance.delete(
    `/api/videos/${videoId}/comments/${commentId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data;
};

export const useDeleteComment = (): UseMutationResult<
  string,
  Error,
  DeleteCommentParams
> => {
  return useMutation<string, Error, DeleteCommentParams>({
    mutationFn: deleteComment,
  });
};
