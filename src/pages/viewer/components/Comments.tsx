import React from 'react';

import * as Styles from '@/pages/viewer/components/Comments.style';
import { useComments } from '@/pages/viewer/hooks/useComments';

interface CommentsContainerProps {
  onClose: () => void;
  videoId: number;
}

const CommentsContainer: React.FC<CommentsContainerProps> = ({
  onClose,
  videoId,
}) => {
  const {
    comments,
    newComment,
    setNewComment,
    editingCommentId,
    editContent,
    setEditContent,
    showOptions,
    setEditingCommentId,
    handleCommentSubmit,
    handleEditSubmit,
    handleDeleteComment,
    toggleOptions,
    isLoading,
    error,
  } = useComments(videoId);

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
                {editingCommentId === comment.commentId ? (
                  <Styles.CommentInput
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    onKeyDown={(e) =>
                      e.key === 'Enter' && handleEditSubmit(comment.commentId)
                    }
                  />
                ) : (
                  <Styles.Description>{comment.content}</Styles.Description>
                )}
              </Styles.CommentContent>
              <Styles.OptionsButton
                onClick={() => toggleOptions(comment.commentId)}
              >
                ⋮
              </Styles.OptionsButton>
              {showOptions === comment.commentId && (
                <Styles.OptionsMenu>
                  <Styles.OptionItem
                    onClick={() => {
                      setEditingCommentId(comment.commentId);
                      setEditContent(comment.content);
                      toggleOptions(comment.commentId);
                    }}
                  >
                    수정하기
                  </Styles.OptionItem>
                  <Styles.OptionItem
                    onClick={() => handleDeleteComment(comment.commentId)}
                  >
                    삭제하기
                  </Styles.OptionItem>
                </Styles.OptionsMenu>
              )}
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
