import React, { useEffect, useState } from 'react';
import { FaThumbsUp, FaComment } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import { Spinner } from '@/components';

import { useLikeVideo } from '@/pages/viewer/apis/reactions/likeVideo';
import { useFetchShortDetail } from '@/pages/viewer/apis/shorts/fetchShortsDetail';
import CommentsContainer from '@/pages/viewer/components/CommentsContainer';
import ShortsCard from '@/pages/viewer/components/ShortsCard';

const ShortsViewerPage: React.FC = () => {
  const { videoId } = useParams<{ videoId: string }>();

  const {
    data: shortsData,
    isLoading,
    error,
  } = useFetchShortDetail(Number(videoId));
  const { mutate: likeVideo } = useLikeVideo();

  const [showComments, setShowComments] = useState(false);
  const [likeCount, setLikeCount] = useState<number | null>(
    shortsData?.like_count ?? null
  );
  const [commentsCount, setCommentsCount] = useState<number | null>(
    shortsData?.comments_count ?? null
  );
  const [hasLiked, setHasLiked] = useState(false);

  // 현재 로그인한 사용자의 프로필 이미지 가져오기
  const currentUserProfileImage = sessionStorage.getItem('image_url') || '';

  useEffect(() => {
    if (shortsData) {
      setLikeCount(shortsData.like_count);
      setCommentsCount(shortsData.comments_count);

      const storedLikeStatus = localStorage.getItem(`liked_video_${videoId}`);
      if (storedLikeStatus === 'true') {
        setHasLiked(true);
      } else {
        setHasLiked(false);
      }
    }
  }, [shortsData, videoId]);

  const handleLike = () => {
    if (hasLiked) return;

    const memberId = shortsData?.member_info?.id;

    if (memberId !== undefined) {
      likeVideo(
        { videoId: Number(videoId), memberId },
        {
          onSuccess: () => {
            setLikeCount((prevCount) =>
              prevCount != null ? prevCount + 1 : 1
            );
            setHasLiked(true);
            localStorage.setItem(`liked_video_${videoId}`, 'true');
          },
          onError: (error) => {
            console.error('좋아요에 실패하였습니다.', error);
          },
        }
      );
    } else {
      console.error('Member ID 가 정의되지 않았습니다.');
    }
  };

  const handleCommentAdded = () => {
    setCommentsCount((prevCount) => (prevCount != null ? prevCount + 1 : 1));
  };

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
            like_count={likeCount || 0}
            view_count={shortsData.view_count}
            comments_count={commentsCount || 0}
          />
          <VideoActions>
            <Action onClick={handleLike} disabled={hasLiked}>
              <FaThumbsUp size={24} />
              <ActionText>{likeCount}</ActionText>
            </Action>
            <Action onClick={() => setShowComments(!showComments)}>
              <FaComment size={24} />
              <ActionText>{commentsCount}</ActionText>
            </Action>
          </VideoActions>
        </ContentContainer>
        {showComments && (
          <CommentsContainer
            videoId={Number(videoId)}
            onClose={() => setShowComments(false)}
            onCommentAdded={handleCommentAdded}
            currentUserProfileImage={currentUserProfileImage}
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

const Action = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  font-size: 18px;
  gap: 8px;
  color: ${({ disabled }) => (disabled ? '#ccc' : '#555')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    color: ${({ disabled }) => (disabled ? '#ccc' : '#111')};
  }
`;

const ActionText = styled.span`
  font-size: 16px;
  margin-top: 5px;
  color: #555;
  text-align: center;
`;
