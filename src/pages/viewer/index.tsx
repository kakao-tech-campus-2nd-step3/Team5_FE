import React, { useState } from 'react';
import { FaThumbsUp, FaComment } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import { Spinner } from '@/components';

import { useFetchShortDetail } from '@/pages/viewer/apis/shorts/fetchShortsDetail';
import CommentsContainer from '@/pages/viewer/components/Comments';
import ShortsCard from '@/pages/viewer/components/ShortsCard';

const ShortsViewerPage: React.FC = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const {
    data: short,
    isLoading,
    error,
  } = useFetchShortDetail(Number(videoId));
  const [showComments, setShowComments] = useState(false);

  if (isLoading) {
    return <Spinner />;
  }
  if (error) return <div>Error loading video.</div>;
  if (!short) return <div>No video found.</div>;

  return (
    <PageContainer>
      <MainContent>
        <ContentContainer $isComments={showComments}>
          <ShortsCard short={short} />
          <VideoActions>
            <Action>
              <FaThumbsUp size={24} />
              <ActionText>{short.likeCount}</ActionText>
            </Action>
            <Action onClick={() => setShowComments(!showComments)}>
              <FaComment size={24} />
              <ActionText>{short.commentsCount}</ActionText>
            </Action>
          </VideoActions>
        </ContentContainer>
        {showComments && (
          <CommentsContainer
            videoId={Number(videoId)}
            onClose={() => setShowComments(false)}
          />
        )}
      </MainContent>
    </PageContainer>
  );
};

export default ShortsViewerPage;

const PageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ContentContainer = styled.div.attrs<{ $isComments: boolean }>(
  ({ $isComments }) => ({
    style: {
      marginRight: $isComments ? '100px' : '0',
    },
  })
)<{ $isComments: boolean }>`
  position: relative;
  max-width: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: margin-right 0.4s ease;
`;

const VideoActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-left: 20px;
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  gap: 8px;
  color: #555;
  cursor: pointer;
  &:hover {
    color: #111;
  }
`;

const ActionText = styled.span`
  font-size: 16px;
  margin-top: 5px;
  color: #555;
  text-align: center;
`;
