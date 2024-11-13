import { fetchInstance } from '@/apis/instance/Instance.api';

import { useMutation, UseMutationResult } from '@tanstack/react-query';

export interface UpdateCommentParams {
  videoId: number;
  commentId: number;
  content: string;
}

export const updateComment = async ({
  videoId,
  commentId,
  content,
}: UpdateCommentParams): Promise<string> => {
  // const accessToken = localStorage.getItem('accessToken');
  // if (!accessToken) {
  //   throw new Error('Access-Token 이 존재하지 않습니다.');
  // }

  const response = await fetchInstance.put(
    `/api/videos/${videoId}/comments/${commentId}`,
    { content },
    // {
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    // }
  );

  return response.data;
};

export const useUpdateComment = (): UseMutationResult<
  string,
  Error,
  UpdateCommentParams
> => {
  return useMutation<string, Error, UpdateCommentParams>({
    mutationFn: updateComment,
  });
};
