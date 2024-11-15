import styled from 'styled-components';

import { Progress, Skeleton } from '@/components';

const Loading = ({
  progress,
  progressMessage,
}: {
  progress: number;
  progressMessage: string;
}) => {
  return (
    <LoadingWrapper>
      <Progress value={progress} />
      <MessageWrapper>
        {!progressMessage ? (
          <SkeletonWrapper>
            <Skeleton className='h-6 w-[200px]' />
          </SkeletonWrapper>
        ) : (
          <LoadingText>{progressMessage}</LoadingText>
        )}
      </MessageWrapper>
    </LoadingWrapper>
  );
};

export default Loading;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 16px;
`;

const MessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 24px;
`;

const SkeletonWrapper = styled.div`
  display: flex;
  width: 200px;
  height: 24px;
`;

const LoadingText = styled.strong`
  font-size: 20px;
  font-weight: 700;
  white-space: nowrap;
`;
