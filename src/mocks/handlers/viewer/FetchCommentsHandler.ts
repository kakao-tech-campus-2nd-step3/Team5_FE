import { http, HttpResponse } from 'msw';

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