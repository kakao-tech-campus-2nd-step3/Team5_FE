import { fetchFastInstance } from '@/apis/instance';

const fetchVideoExtractPath = (videoId: number) =>
  `/api/videos/${videoId}/extract`;

export const fetchVideoExtract = async (videoId: number) => {
  const response = await fetchFastInstance.get(fetchVideoExtractPath(videoId));
  return response.data;
};
