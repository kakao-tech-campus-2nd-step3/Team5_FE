import React from 'react';

import styled from 'styled-components';

import { LazyLoadImg } from '@/components/common/img/LazyLoadingImg';

interface ShortsCardProps {
  image: {
    alt: string;
    src: string;
  };
  title: string;
  timeAgo: string;
}

const ShortsThumbnailCard: React.FC<ShortsCardProps> = ({
  image,
  title,
  timeAgo,
}) => {
  return (
    <Card>
      <LazyLoadImg image={image} />
      <Title>{title}</Title>
      <TimeAgo>{timeAgo}</TimeAgo>
    </Card>
  );
};

export default ShortsThumbnailCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding-top: 10px;
`;

const Title = styled.h3`
  font-size: 16px;
  margin: 15px 0;
  text-align: center;
`;

const TimeAgo = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 5px;
  margin-bottom: 10px;
`;