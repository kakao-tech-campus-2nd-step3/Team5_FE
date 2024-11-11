import React, { useState } from 'react';

import { useCreateComment } from '@/pages/viewer/apis/useCreateComment.api';
import {
  useFetchComments,
  Comment,
} from '@/pages/viewer/apis/useFetchComments.api';
import * as Styles from '@/pages/viewer/components/Comments.style';

interface CommentsContainerProps {
  onClose: () => void;
  videoId: number;
}

const CommentsContainer: React.FC<CommentsContainerProps> = ({ onClose, videoId }) => {
  const {
    data: fetchedComments = [],
    isLoading,
    error,
  } = useFetchComments(videoId);
  const [comments, setComments] = useState<Comment[]>(fetchedComments);
  const [newComment, setNewComment] = useState('');
  const createCommentMutation = useCreateComment();

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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading comments.</div>;

  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.BackButton onClick={onClose}>←</Styles.BackButton>
      </Styles.Header>
      <Styles.CommentsList>
        {comments && comments.length > 0 ? (
          comments.map((comment) => (
            <Styles.Comment key={comment.commentId}>
              <Styles.Avatar
                src={comment.member.imageUrl}
                alt={`${comment.member.username}'s avatar`}
              />
              <Styles.CommentContent>
                <Styles.UserName>{comment.member.username}</Styles.UserName>
                <Styles.Description>{comment.content}</Styles.Description>
              </Styles.CommentContent>
            </Styles.Comment>
          ))
        ) : (
          <Styles.NoCommentsMessage>No comments yet.</Styles.NoCommentsMessage>
        )}
      </Styles.CommentsList>
      <Styles.CommentInputContainer>
        <Styles.Avatar />
        <Styles.CommentInput
          placeholder='댓글을 입력하세요!'
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleCommentSubmit()}
        />
        <Styles.SubmitButton onClick={handleCommentSubmit}>
          보내기
        </Styles.SubmitButton>
      </Styles.CommentInputContainer>
    </Styles.Container>
  );
};

export default CommentsContainer;
