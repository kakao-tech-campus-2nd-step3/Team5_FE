import { useEffect, useState } from 'react';

import styled from 'styled-components';

import Loading from './Loading';

const ProgressView = ({
  setProcessState,
}: {
  setProcessState: (state: 'initial' | 'progress' | 'final') => void;
}) => {
  const [progress, setProgress] = useState<number>(20);

  useEffect(() => {
    // 타이머 ID를 저장할 배열
    const timers: NodeJS.Timeout[] = [];

    timers.push(
      setTimeout(() => {
        setProgress(70);
      }, 700)
    );

    timers.push(
      setTimeout(() => {
        setProgress(100);
      }, 1400)
    );

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [setProcessState]);

  useEffect(() => {
    if (progress === 100) {
      setProcessState('final');
    }
  }, [progress, setProcessState]);

  return (
    <LoadingContainer>
      <Loading progress={progress} />
    </LoadingContainer>
  );
};

export default ProgressView;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 864px;
  height: 616px;
  justify-content: center;
  align-items: center;
  gap: 72px;
`;
