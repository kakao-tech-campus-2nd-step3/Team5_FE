import React from 'react';

import { useFetchComments } from '@/pages/viewer/apis/useFetchComments.api';
import * as Styles from '@/pages/viewer/components/Comments.style';

interface CommentsContainerProps {
  onClose: () => void;
  videoId: number;
}

const CommentsContainer: React.FC<CommentsContainerProps> = ({
  onClose,
  videoId,
}) => {
  const { data: comments, isLoading, error } = useFetchComments(videoId);

  if (isLoading)
    return <div>Loading...</div>;
  if (error)
    return <div>Error loading comments.</div>;

  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.BackButton onClick={onClose}>← 댓글</Styles.BackButton>
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
        <Styles.CommentInput placeholder='댓글 추가...' />
        <Styles.CloseButton onClick={onClose}>×</Styles.CloseButton>
      </Styles.CommentInputContainer>
    </Styles.Container>
  );
};

export default CommentsContainer;
