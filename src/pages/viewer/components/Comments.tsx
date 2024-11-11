import React from 'react';

import * as Styles from '@/pages/viewer/components/Comments.style';

interface CommentsContainerProps {
  onClose: () => void;
}

const CommentsContainer: React.FC<CommentsContainerProps> = ({ onClose }) => {
  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.BackButton onClick={onClose}>← 댓글</Styles.BackButton>
      </Styles.Header>
      <Styles.CommentsList>
        {Array.from({ length: 10 }).map((_, index) => (
          <Styles.Comment key={index}>
            <Styles.Avatar />
            <Styles.CommentContent>
              <Styles.UserName>UserName{index + 1}</Styles.UserName>
              <Styles.Description>Description</Styles.Description>
            </Styles.CommentContent>
          </Styles.Comment>
        ))}
      </Styles.CommentsList>
      <Styles.CommentInputContainer>
        <Styles.Avatar />
        <Styles.CommentInput placeholder="댓글 추가..." />
        <Styles.CloseButton onClick={onClose}>×</Styles.CloseButton>
      </Styles.CommentInputContainer>
    </Styles.Container>
  );
};

export default CommentsContainer;
