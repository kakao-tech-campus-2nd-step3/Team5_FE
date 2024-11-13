import { fetchInstance } from '@/apis/instance/Instance.api';

import { useMutation, UseMutationResult } from '@tanstack/react-query';

export interface CreateCommentParams {
  videoId: number;
  content: string;
}

export interface CommentResponse {
  commentId: number;
  member: {
    memberId: number;
    imageUrl: string;
    username: string;
  };
  content: string;
}

export const createComment = async ({
  videoId,
  content,
}: CreateCommentParams): Promise<CommentResponse> => {
  // const accessToken = localStorage.getItem('accessToken');
  // if (!accessToken) {
  //   throw new Error('Access-Token 이 존재하지 않습니다.');
  // }

  const response = await fetchInstance.post(
    `/api/videos/${videoId}/comments`,
    { content },
    // {
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    // }
  );
  return response.data;
};

export const useCreateComment = (): UseMutationResult<
  CommentResponse,
  Error,
  CreateCommentParams
> => {
  return useMutation<CommentResponse, Error, CreateCommentParams>({
    mutationFn: createComment,
  });
};
