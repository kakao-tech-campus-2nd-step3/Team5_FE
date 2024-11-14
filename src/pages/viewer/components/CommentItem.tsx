import React, { useState, useRef, useEffect } from 'react';

import * as Styles from '@/pages/viewer/components/CommentsContainer.style';

interface CommentItemProps {
  comment: {
    comment_id: number;
    member: {
      image_url: string;
      username: string;
    };
    content: string;
  };
  editingCommentId: number | null;
  editContent: string;
  setEditContent: (content: string) => void;
  setEditingCommentId: (commentId: number) => void;
  handleEditSubmit: (commentId: number) => void;
  handleDeleteComment: (commentId: number) => void;
}

const CommentItem: React.FC<CommentItemProps> = ({
  comment,
  editingCommentId,
  editContent,
  setEditContent,
  setEditingCommentId,
  handleEditSubmit,
  handleDeleteComment,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    if (showOptions) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showOptions]);

  return (
    <Styles.Comment key={comment.comment_id}>
      <Styles.Avatar
        src={comment.member.image_url}
        alt={`${comment.member.username}'s avatar`}
      />
      <Styles.CommentContent>
        <Styles.UserName>{comment.member.username}</Styles.UserName>
        {editingCommentId === comment.comment_id ? (
          <Styles.CommentInput
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            onKeyDown={(e) =>
              e.key === 'Enter' && handleEditSubmit(comment.comment_id)
            }
          />
        ) : (
          <Styles.Description>{comment.content}</Styles.Description>
        )}
      </Styles.CommentContent>
      <Styles.OptionsButton onClick={toggleOptions}>⋮</Styles.OptionsButton>
      {showOptions && (
        <Styles.OptionsMenu ref={menuRef}>
          <Styles.OptionItem
            onClick={() => {
              setEditingCommentId(comment.comment_id);
              setEditContent(comment.content);
              setShowOptions(false);
            }}
          >
            수정하기
          </Styles.OptionItem>
          <Styles.OptionItem
            onClick={() => {
              handleDeleteComment(comment.comment_id);
              setShowOptions(false);
            }}
          >
            삭제하기
          </Styles.OptionItem>
        </Styles.OptionsMenu>
      )}
    </Styles.Comment>
  );
};

export default CommentItem;
