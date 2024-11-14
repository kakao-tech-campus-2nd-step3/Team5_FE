import { ShortsProps } from '@/pages/viewer/components/ShortsCard';

import { fetchInstance } from '@/apis/instance/Instance.api';

import { useQuery } from '@tanstack/react-query';

const fetchShortsDetailPath = (videoId: number) => `/api/videos/${videoId}`;

const fetchShortById = async (videoId: number): Promise<ShortsCardProps> => {
  const response = await fetchInstance.get(fetchShortsDetailPath(videoId));
  return response.data;
};

export const useFetchShortDetail = (videoId: number) => {
  return useQuery<ShortsCardProps, Error>({
    queryKey: ['short', videoId],
    queryFn: () => fetchShortById(videoId),
    staleTime: 1000 * 60 * 3,
  });
};
