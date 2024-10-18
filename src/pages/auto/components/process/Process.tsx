import {
  FaCloudUploadAlt,
  FaAngleDoubleRight,
  FaCloudDownloadAlt,
} from 'react-icons/fa';

import styled from 'styled-components';

const Process = ({
  processState,
}: {
  processState: 'initial' | 'progress' | 'final';
}) => {
  return (
    <ProcessContainer>
      <ProcessIconsWrapper>
        <FaCloudUploadAlt
          size='24'
          color={processState === 'initial' ? '#000' : '#00000018'}
        />
        <ProcessText color={processState === 'initial' ? '#000' : '#00000018'}>
          Upload
        </ProcessText>
      </ProcessIconsWrapper>
      <ProcessIconsWrapper>
        <FaAngleDoubleRight
          size='24'
          color={processState === 'progress' ? '#000' : '#00000018'}
        />
        <ProcessText color={processState === 'progress' ? '#000' : '#00000018'}>
          Convert
        </ProcessText>
      </ProcessIconsWrapper>
      <ProcessIconsWrapper>
        <FaCloudDownloadAlt
          size='24'
          color={processState === 'final' ? '#000' : '#00000018'}
        />
        <ProcessText color={processState === 'final' ? '#000' : '#00000018'}>
          Extraction
        </ProcessText>
      </ProcessIconsWrapper>
    </ProcessContainer>
  );
};

export default Process;

const ProcessContainer = styled.ol`
  display: flex;
  gap: 48px;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

const ProcessIconsWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
`;

const ProcessText = styled.strong<{ color: string }>`
  font-size: 16px;
  color: ${(props) => props.color};
`;
