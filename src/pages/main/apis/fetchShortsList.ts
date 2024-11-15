import { fetchInstance } from '@/apis/instance';

import { useQuery } from '@tanstack/react-query';

export type ShortsVideoProps = {
  video_id: number;
  thumbnail: string;
  title: string;
  member_id: number;
  created_at: string;
};

export type FetchShortsParams = {
  categoryId: number;
  page?: number;
  size?: number;
};

const fetchShortsPath = () => '/api/videos';

export const fetchShortsByCategory = async (
  params: FetchShortsParams
): Promise<ShortsVideoProps[]> => {
  const response = await fetchInstance.get(fetchShortsPath(), {
    params: {
      categoryId: params.categoryId,
      page: params.page ?? 0,
      size: params.size ?? 100,
    },
  });

  return response.data;
};

export const useFetchShortsByCategory = (params: FetchShortsParams) => {
  return useQuery<ShortsVideoProps[]>({
    queryKey: ['fetchShortsByCategory', params.categoryId],
    queryFn: () => fetchShortsByCategory(params),
    staleTime: 1000 * 60 * 3,
  });
};
