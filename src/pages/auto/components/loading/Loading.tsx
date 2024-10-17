import styled from 'styled-components';

import { Progress } from '@/components';

const Loading = ({ progress }: { progress: number }) => {
  return (
    <>
      <Progress value={progress} />
      <LoadingText>변환 중 이에요, 조금만 기다려주세요!</LoadingText>
    </>
  );
};

export default Loading;

const LoadingText = styled.strong`
  font-size: 20px;
  font-weight: 700;
`;
