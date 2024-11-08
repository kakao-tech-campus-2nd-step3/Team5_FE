import { fetchInstance } from '@/apis/instance/Instance.api';

export type ShortsVideoProps = {
  videoId: number;
  thumbnail: string;
  title: string;
  memberId: number;
  createdAt: string;
}

export type FetchShortsParams = {
  categoryId: number;
  page?: number;
  size?: number;
}

const fetchShortsPath = () => '/api/videos';

export const fetchShortsByCategory = async (
  params: FetchShortsParams
): Promise<ShortsVideoProps[]> => {
  const response = await fetchInstance.get(fetchShortsPath(), {
    params: {
      categoryId: params.categoryId,
      page: params.page ?? 0,
      size: params.size ?? 5,
    },
  });

  return response.data;
};
