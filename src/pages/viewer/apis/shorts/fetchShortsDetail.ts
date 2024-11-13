import { fetchInstance } from '@/apis/instance/Instance.api';

import { useQuery } from '@tanstack/react-query';

export interface ShortsProps {
  id: number;
  title: string;
  categoryId: number;
  videoUrl: string;
  memberInfo: {
    id: number;
    imageUrl: string;
    username: string;
  };
  likeCount: number;
  viewCount: number;
  commentsCount: number;
}

const fetchShortsDetailPath = (videoId: number) => `/api/videos/${videoId}`;

const fetchShortById = async (videoId: number): Promise<ShortsProps> => {
  const response = await fetchInstance.get(fetchShortsDetailPath(videoId));
  return response.data;
};

export const useFetchShortDetail = (videoId: number) => {
  return useQuery<ShortsProps, Error>({
    queryKey: ['short', videoId],
    queryFn: () => fetchShortById(videoId),
    staleTime: 1000 * 60 * 3,
  });
};
