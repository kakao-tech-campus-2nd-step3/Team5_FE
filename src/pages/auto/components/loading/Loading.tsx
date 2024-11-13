import styled from 'styled-components';

import { Progress } from '@/components';

const Loading = ({
  progress,
  progressMessage,
}: {
  progress: number;
  progressMessage: string;
}) => {
  return (
    <>
      <Progress value={progress} />
      <LoadingText>{progressMessage}</LoadingText>
    </>
  );
};

export default Loading;

const LoadingText = styled.strong`
  font-size: 20px;
  font-weight: 700;
`;
