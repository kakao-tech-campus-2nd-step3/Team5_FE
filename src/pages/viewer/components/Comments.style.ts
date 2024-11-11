import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 500px;
  height: 75%;
  background-color: #fff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 12px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export const CommentsList = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-top: 10px;
`;

export const Comment = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  background-color: #ddd;
  border-radius: 50%;
  margin-right: 10px;
`;

export const NoCommentsMessage = styled.div`
  color: #aaa;
  font-size: 16px;
  text-align: center;
  padding: 20px;
`;

export const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  font-weight: bold;
`;

export const Description = styled.span`
  font-size: 14px;
  color: #888;
`;

export const CommentInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  border-top: 1px solid #ddd;
`;

export const CommentInput = styled.input`
  flex: 1;
  border: none;
  padding: 8px;
  font-size: 14px;
  outline: none;
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-left: 8px;

  &:hover {
    background-color: #0056b3;
  }
`;
