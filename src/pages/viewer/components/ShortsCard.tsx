import React from 'react';

import * as Styles from '@/pages/viewer/components/ShortsCard.style';

interface ShortsCardProps {
  short: {
    id: number;
    title: string;
    categoryId: number;
    videoUrl: string;
    memberInfo: {
      id: number;
      imageUrl: string;
      username: string;
    };
  };
}

const ShortsCard: React.FC<ShortsCardProps> = ({ short }) => {
  return (
    <Styles.CardContainer>
      <Styles.VideoContainer>
        <Styles.Video controls src={short.videoUrl} />
        <Styles.InfoContainer>
          <Styles.ProfileSection>
            <Styles.ProfileImage
              src={short.memberInfo.imageUrl}
              alt='Profile'
            />
            <Styles.ProfileName>{short.memberInfo.username}</Styles.ProfileName>
          </Styles.ProfileSection>
          <Styles.Title>{short.title}</Styles.Title>
        </Styles.InfoContainer>
      </Styles.VideoContainer>
    </Styles.CardContainer>
  );
};

export default ShortsCard;
