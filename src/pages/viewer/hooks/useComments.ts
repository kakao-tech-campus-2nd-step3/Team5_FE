import { useState, useEffect } from 'react';

import { useCreateComment } from '@/pages/viewer/apis/comments/createComment';
import { useDeleteComment } from '@/pages/viewer/apis/comments/deleteComment';
import { useFetchComments, Comment } from '@/pages/viewer/apis/comments/fetchComments';
import { useUpdateComment } from '@/pages/viewer/apis/comments/updateComment';

export function useComments(videoId: number) {
  const {
    data: fetchedComments = [],
    isLoading,
    error,
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

  const handleCommentSubmit = () => {
    createCommentMutation.mutate(
      { videoId, content: newComment },
      {
        onSuccess: (createdComment) => {
          setComments((prevComments) => [...prevComments, createdComment]);
          setNewComment('');
        },
      }
    );
  };

  const handleEditSubmit = (commentId: number) => {
    updateCommentMutation.mutate(
      { videoId, commentId, content: editContent },
      {
        onSuccess: (updatedContent: { content: string } | string) => {
          const newContent = typeof updatedContent === 'string' ? updatedContent : updatedContent.content;
  
          setComments((prevComments) =>
            prevComments.map((comment) =>
              comment.comment_id === commentId
                ? { ...comment, content: newContent }
                : comment
            )
          );

          setEditingCommentId(null);
          setEditContent('');
        },
        onError: (error) => {
          console.error('Error updating comment:', error);
        },
      }
    );
  };

  const handleDeleteComment = (commentId: number) => {
    deleteCommentMutation.mutate(
      { videoId, commentId },
      {
        onSuccess: () => {
          setComments((prevComments) =>
            prevComments.filter((comment) => comment.comment_id !== commentId)
          );
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
