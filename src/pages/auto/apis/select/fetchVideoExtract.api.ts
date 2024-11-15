import { fetchInstance } from '@/apis/instance';

const fetchVideoExtractPath = (videoId: number) =>
  `/api/videos/${videoId}/extract`;

export const fetchVideoExtract = async (videoId: number) => {
  const response = await fetchInstance.get(fetchVideoExtractPath(videoId));
  return response.data;
};
