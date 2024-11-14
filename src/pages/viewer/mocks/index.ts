import { http, HttpResponse } from 'msw';

import type { ShortsProps } from '@/pages/viewer/apis/shorts/fetchShortsDetail';

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

// PostCommentsHandler 수정
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

export const UpdateCommentHandler = [
  http.put(
    '/api/videos/:videoId/comments/:commentId',
    async ({ request, params }) => {
      const { videoId, commentId } = params;
      const videoIdNumber = Number(videoId);
      const commentIdNumber = Number(commentId);

      // videoId 및 commentId의 유효성 검사
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
      if (isNaN(commentIdNumber) || commentIdNumber <= 0) {
        return HttpResponse.json(
          {
            code: 'C004',
            message: '존재하지 않는 commentId 입니다.',
            data: 'Invalid comment ID',
          },
          { status: 404 }
        );
      }

      const requestBody = await request.json();
      const { content } = requestBody as { content: string };

      const updatedComment = {
        commentId: commentIdNumber,
        member: {
          memberId: 1,
          imageUrl: `https://i.pravatar.cc/150?img=1`,
          username: `TestUser`,
        },
        content,
      };

      return HttpResponse.json(updatedComment, { status: 200 });
    }
  ),
];

export const DeleteCommentHandler = [
  http.delete(
    '/api/videos/:videoId/comments/:commentId',
    async ({ params }) => {
      const { videoId, commentId } = params;
      const videoIdNumber = Number(videoId);
      const commentIdNumber = Number(commentId);

      // videoId 및 commentId의 유효성 검사
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
      if (isNaN(commentIdNumber) || commentIdNumber <= 0) {
        return HttpResponse.json(
          {
            code: 'C004',
            message: '존재하지 않는 commentId 입니다.',
            data: 'Invalid comment ID',
          },
          { status: 404 }
        );
      }

      return HttpResponse.json(
        { message: '댓글 삭제 성공', commentId: commentIdNumber },
        { status: 200 }
      );
    }
  ),
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

    const mockVideo: ShortsCardProps = {
      id: videoIdNumber,
      title: `Video ${videoIdNumber}`,
      category_id: 1,
      video_url: sampleVideo,
      member_info: {
        id: videoIdNumber % 5,
        image_url: `https://i.pravatar.cc/150?img=${(videoIdNumber % 10) + 1}`,
        username: `User ${videoIdNumber % 5}`,
      },
      like_count: 100 + videoIdNumber,
      view_count: 1000 + videoIdNumber * 10,
      comments_count: 10 + videoIdNumber,
    };

    return HttpResponse.json(mockVideo);
  }),
];
