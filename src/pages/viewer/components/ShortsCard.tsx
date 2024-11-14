import React from 'react';

import * as Styles from '@/pages/viewer/components/ShortsCard.style';

export interface ShortsCardProps {
  id: number;
  title: string;
  category_id: number;
  video_url: string;
  member_info: {
    id: number;
    image_url: string;
    username: string;
  };
  like_count: number;
  view_count: number;
  comments_count: number;
}

const ShortsCard: React.FC<ShortsCardProps> = ({ video_url, member_info, title }) => {
  return (
    <Styles.CardContainer>
      <Styles.VideoContainer>
        <Styles.Video controls src={video_url} />
        <Styles.InfoContainer>
          <Styles.ProfileSection>
            <Styles.ProfileImage
              src={member_info.image_url}
              alt='Profile'
            />
            <Styles.ProfileName>
              {member_info?.username}
            </Styles.ProfileName>
          </Styles.ProfileSection>
          <Styles.Title>{title}</Styles.Title>
        </Styles.InfoContainer>
      </Styles.VideoContainer>
    </Styles.CardContainer>
  );
};

export default ShortsCard;
