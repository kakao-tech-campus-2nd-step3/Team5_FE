import React, { useState } from 'react';
import { FaThumbsUp, FaComment } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import { Spinner } from '@/components';

import { useFetchShortDetail } from '@/pages/viewer/apis/shorts/fetchShortsDetail';
import CommentsContainer from '@/pages/viewer/components/CommentsContainer';
import ShortsCard from '@/pages/viewer/components/ShortsCard';

import { s } from 'node_modules/vite/dist/node/types.d-aGj9QkWt';

const ShortsViewerPage: React.FC = () => {
  const { videoId } = useParams<{ videoId: string }>();

  const {
    data: shortsData,
    isLoading,
    error,
  } = useFetchShortDetail(Number(videoId));
  const [showComments, setShowComments] = useState(false);

  console.log('Shorts data:', shortsData);

  if (isLoading) {
    return <Spinner />;
  }
  if (error) return <div>Error loading video.</div>;
  if (!shortsData) return <div>No video found.</div>;

  return (
    <PageContainer>
      <MainContent>
        <ContentContainer $isComments={showComments}>
          <ShortsCard
            id={shortsData.id}
            category_id={shortsData.category_id}
            video_url={shortsData.video_url}
            member_info={shortsData.member_info}
            title={shortsData.title}
            like_count={shortsData.like_count}
            view_count={shortsData.view_count}
            comments_count={shortsData.comments_count}
          />
          <VideoActions>
            <Action>
              <FaThumbsUp size={24} />
              <ActionText>{shortsData.like_count}</ActionText>
            </Action>
            <Action onClick={() => setShowComments(!showComments)}>
              <FaComment size={24} />
              <ActionText>{shortsData.comments_count}</ActionText>
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
