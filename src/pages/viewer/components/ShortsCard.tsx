import React from 'react';
import { FaThumbsUp, FaComment } from 'react-icons/fa';

import styled from 'styled-components';

interface ShortsCardProps {
  short: {
    id: string;
    title: string;
    thumbnail: string;
  };
}

const ShortsCard: React.FC<ShortsCardProps> = ({ short }) => {
  return (
    <ShortsCardContainer>
      <Thumbnail src={short.thumbnail} alt={short.title} />
      <InfoOverlay>
        <ProfileSection>
          <ProfileImage src='https://via.placeholder.com/50' alt='Profile' />
          <ProfileName>Dummy Data</ProfileName>
        </ProfileSection>
        <Description>{short.title}</Description>
      </InfoOverlay>
      <ActionsOverlay>
        <ActionItem>
          <FaThumbsUp />
          <ActionText>245K</ActionText>
        </ActionItem>
        <ActionItem>
          <FaComment />
          <ActionText>1024</ActionText>
        </ActionItem>
      </ActionsOverlay>
    </ShortsCardContainer>
  );
};

export default ShortsCard;

export const ShortsCardContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  height: 85vh;
  background-color: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 30px 0;
  border-radius: 45px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoOverlay = styled.div`
  position: absolute;
  width: 250px;
  bottom: 30px;
  left: 30px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
  border-radius: 8px;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
`;

const ProfileName = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #ffffff;
  margin-top: 5px;
`;

const ActionsOverlay = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: #ffffff;
`;

const ActionItem = styled.div`
  display: flex;
  align-items: center;
`;

const ActionText = styled.span`
  font-size: 14px;
  margin-left: 6px;
  color: #ffffff;
`;