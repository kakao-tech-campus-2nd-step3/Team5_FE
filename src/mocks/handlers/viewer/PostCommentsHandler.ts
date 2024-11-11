import { http, HttpResponse } from 'msw';

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
