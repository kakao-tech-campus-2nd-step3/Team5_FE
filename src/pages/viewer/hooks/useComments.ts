import { useState, useEffect } from 'react';

import { useCreateComment } from '@/pages/viewer/apis/comments/createComment';
import { useDeleteComment } from '@/pages/viewer/apis/comments/deleteComment';
import {
  useFetchComments,
  Comment,
} from '@/pages/viewer/apis/comments/fetchComments';
import { useUpdateComment } from '@/pages/viewer/apis/comments/updateComment';

interface UseCommentsOptions {
  videoId: number;
  onCommentAdded?: () => void;
}

export function useComments({ videoId, onCommentAdded }: UseCommentsOptions) {
  const {
    data: fetchedComments = [],
    isLoading,
    error,
    refetch,
  } = useFetchComments(videoId);
  const createCommentMutation = useCreateComment();
  const updateCommentMutation = useUpdateComment();
  const deleteCommentMutation = useDeleteComment();

  const [comments, setComments] = useState<Comment[]>(fetchedComments);
  const [newComment, setNewComment] = useState('');
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    setComments(fetchedComments);
  }, [fetchedComments]);

  const checkLogin = () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      alert('로그인이 필요합니다. 로그인 후 이용해 주세요.');
      return false;
    }
    return true;
  };

  const handleCommentSubmit = () => {
    if (!checkLogin()) return;

    createCommentMutation.mutate(
      { videoId, content: newComment },
      {
        onSuccess: (createdComment) => {
          setComments((prevComments) => [...prevComments, createdComment]);
          setNewComment('');
          refetch();

          if (onCommentAdded) {
            onCommentAdded();
          }
        },
        onError: (error) => {
          console.error('댓글 작성 실패:', error);
        },
      }
    );
  };

  const handleEditSubmit = (commentId: number) => {
    if (!checkLogin()) return;

    updateCommentMutation.mutate(
      { videoId, commentId, content: editContent },
      {
        onSuccess: (updatedContent: { content: string } | string) => {
          const newContent =
            typeof updatedContent === 'string'
              ? updatedContent
              : updatedContent.content;

          setComments((prevComments) =>
            prevComments.map((comment) =>
              comment.comment_id === commentId
                ? { ...comment, content: newContent }
                : comment
            )
          );

          setEditingCommentId(null);
          setEditContent('');
          refetch();
        },
        onError: (error) => {
          console.error('댓글 수정 실패', error);
        },
      }
    );
  };

  const handleDeleteComment = (commentId: number) => {
    if (!checkLogin()) return;

    deleteCommentMutation.mutate(
      { videoId, commentId },
      {
        onSuccess: () => {
          setComments((prevComments) =>
            prevComments.filter((comment) => comment.comment_id !== commentId)
          );
        },
        onError: (error) => {
          console.error('댓글 삭제 실패:', error);
        },
      }
    );
  };

  return {
    comments,
    newComment,
    setNewComment,
    editingCommentId,
    editContent,
    setEditContent,
    setEditingCommentId,
    handleCommentSubmit,
    handleEditSubmit,
    handleDeleteComment,
    isLoading,
    error,
  };
}
