import React, { useState } from 'react';

import { Spinner } from '@/components';

import CommentItem from '@/pages/viewer/components/CommentItem';
import * as Styles from '@/pages/viewer/components/CommentsContainer.style';
import { useComments } from '@/pages/viewer/hooks/useComments';

interface CommentsContainerProps {
  onClose: () => void;
  onCommentAdded: () => void;
  videoId: number;
}

const CommentsContainer: React.FC<CommentsContainerProps> = ({
  onClose,
  onCommentAdded,
  videoId,
}) => {
  const {
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
  } = useComments({ videoId, onCommentAdded });

  const [isComposing, setIsComposing] = useState(false);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isComposing) {
      handleCommentSubmit();
    }
  };

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading comments.</div>;

  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.BackButton onClick={onClose}>←</Styles.BackButton>
      </Styles.Header>
      <Styles.CommentsList>
        {comments && comments.length > 0 ? (
          comments.map((comment, index) => (
            <CommentItem
              key={index}
              comment={comment}
              editingCommentId={editingCommentId}
              editContent={editContent}
              setEditContent={setEditContent}
              setEditingCommentId={setEditingCommentId}
              handleEditSubmit={handleEditSubmit}
              handleDeleteComment={handleDeleteComment}
            />
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
          onKeyDown={handleKeyPress}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
        />
        <Styles.SubmitButton onClick={handleCommentSubmit}>
          보내기
        </Styles.SubmitButton>
      </Styles.CommentInputContainer>
    </Styles.Container>
  );
};

export default CommentsContainer;
