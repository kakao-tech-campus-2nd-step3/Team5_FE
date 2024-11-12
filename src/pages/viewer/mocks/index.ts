import { http, HttpResponse } from 'msw';

import type { ShortsProps } from '@/pages/viewer/apis/useFetchShorts.api';

import sampleVideo from '@/assets/Sample_video.mp4';

export const FetchCommentsHandler = [
  http.get('/api/videos/:videoId/comments', async ({ params }) => {
    const { videoId } = params;
    const videoIdNumber = Number(videoId);

    // videoId 의 유효성 검사
    if (isNaN(videoIdNumber) || videoIdNumber <= 0) {
      return HttpResponse.json(
        {
          code: 'C003',
          message: '존재하지 않는 videoId 입니다.',
          data: 'Invalid video ID',
        },
        { status: 404 }
      );
    }

    const mockComments = Array.from({ length: 10 }, (_, index) => ({
      commentId: index + 1,
      member: {
        memberId: index + 1,
        imageUrl: `https://i.pravatar.cc/150?img=${(index % 10) + 1}`,
        username: `UserName${index + 1}`,
      },
      content: `Description for comment ${index + 1}`,
    }));

    return HttpResponse.json(mockComments);
  }),
];

export const PostCommentsHandler = [
  http.post('/api/videos/:videoId/comments', async ({ request, params }) => {
    const { videoId } = params;
    const videoIdNumber = Number(videoId);

    // videoId의 유효성 검사
    if (isNaN(videoIdNumber) || videoIdNumber <= 0) {
      return HttpResponse.json(
        {
          code: 'C003',
          message: '존재하지 않는 videoId 입니다.',
          data: 'Invalid video ID',
        },
        { status: 404 }
      );
    }

    const requestBody = await request.json();
    const { content } = requestBody as { content: string };

    const newComment = {
      commentId: Math.floor(Math.random() * 1000),
      member: {
        memberId: 1,
        imageUrl: `https://i.pravatar.cc/150?img=1`,
        username: `TestUser`,
      },
      content,
    };

    return HttpResponse.json(newComment, { status: 200 });
  }),
];

export const ViewShortsHandler = [
  http.get('/api/videos/:videoId', async ({ params }) => {
    const { videoId } = params;
    const videoIdNumber = Number(videoId);

    // videoId의 유효성 검사
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
