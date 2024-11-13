import { fetchInstance } from '@/apis/instance/Instance.api';

import { useQuery } from '@tanstack/react-query';

export interface Comment {
  commentId: number;
  member: {
    memberId: number;
    imageUrl: string;
    username: string;
  };
  content: string;
}

const fetchCommentsPath = (videoId: number) =>
  `/api/videos/${videoId}/comments`;

export const fetchComments = async (videoId: number): Promise<Comment[]> => {
  const response = await fetchInstance.get(fetchCommentsPath(videoId));
  return response.data;
};

export const useFetchComments = (videoId: number) => {
  return useQuery<Comment[], Error>({
    queryKey: ['comments', videoId],
    queryFn: () => fetchComments(videoId),
    enabled: !!videoId,
    staleTime: 1000 * 60 * 5,
  });
};
