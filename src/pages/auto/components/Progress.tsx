import {
  FaCloudUploadAlt,
  FaAngleDoubleRight,
  FaCloudDownloadAlt,
} from 'react-icons/fa';

import styled from 'styled-components';

const Progress = () => {
  return (
    <ProgressContainer>
      <ProgressIconsWrapper>
        <FaCloudUploadAlt size='24' />
        <ProgressText>Upload</ProgressText>
      </ProgressIconsWrapper>
      <ProgressIconsWrapper>
        <FaAngleDoubleRight size='24' />
        <ProgressText>Convert</ProgressText>
      </ProgressIconsWrapper>
      <ProgressIconsWrapper>
        <FaCloudDownloadAlt size='24' />
        <ProgressText>Extraction</ProgressText>
      </ProgressIconsWrapper>
    </ProgressContainer>
  );
};

export default Progress;

const ProgressContainer = styled.ol`
  display: flex;
  gap: 48px;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

const ProgressIconsWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
`;

const ProgressText = styled.strong`
  font-size: 16px;
`;
