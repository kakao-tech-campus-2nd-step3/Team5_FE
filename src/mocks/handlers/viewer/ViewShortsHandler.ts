import { http, HttpResponse } from 'msw';

import type { ShortsProps } from '@/pages/viewer/apis/useFetchShorts.api';

import sampleVideo from '@/assets/Sample_video.mp4';

export const ViewShortsHandler = [
  http.get('/api/videos/:videoId', async ({ params }) => {
    const { videoId } = params;
    const videoIdNumber = Number(videoId);

    // 요청된 videoId 의 유효성 검사
    if (isNaN(videoIdNumber) || videoIdNumber <= 0) {
      return HttpResponse.json(
        {
          code: 'V004',
          message: '존재하지 않는 비디오',
          data: 'Invalid video ID',
        },
        { status: 404 }
      );
    }

    const mockVideo: ShortsProps = {
      id: videoIdNumber,
      title: `Video ${videoIdNumber}`,
      categoryId: 1,
      videoUrl: sampleVideo,
      memberInfo: {
        id: videoIdNumber % 5,
        imageUrl: `https://i.pravatar.cc/150?img=${(videoIdNumber % 10) + 1}`,
        username: `User ${videoIdNumber % 5}`,
      },
      likeCount: 100 + videoIdNumber,
      viewCount: 1000 + videoIdNumber * 10,
      commentsCount: 10 + videoIdNumber,
    };

    return HttpResponse.json(mockVideo);
  }),
];
