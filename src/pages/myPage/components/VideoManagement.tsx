import styled from 'styled-components';

import { ShortsGrid } from '@/components';

const VideoManagement = () => {
  return (
    <>
      <SectionTitle>영상 관리</SectionTitle>
      <VideoSection>
        <ShortsGrid />
      </VideoSection>
    </>
  );
};

export default VideoManagement;

const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const VideoSection = styled.div``;
