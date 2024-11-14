import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { usefetchTaskStatus } from '@/pages/auto/apis';

import Loading from './Loading';

const ProgressView = ({
  setProcessState,
}: {
  setProcessState: (state: 'initial' | 'progress' | 'final') => void;
}) => {
  const [progress, setProgress] = useState<number>(0);
  const [processMessage, setprocessMessage] = useState<string>('');
  const task_id = sessionStorage.getItem('task_id');

  const { data, refetch } = usefetchTaskStatus(task_id ?? ''); // 상태 요청

  useEffect(() => {
    const pollingInterval = setInterval(async () => {
      if (task_id) {
        const { data: refetchedData } = await refetch();
        // console.log('Polling data:', refetchedData);

        if (refetchedData?.status === 'completed') {
          sessionStorage.setItem('status', 'completed');
          setProcessState('final');
          clearInterval(pollingInterval);
        } else {
          sessionStorage.setItem('status', refetchedData?.status ?? '');
          updateProgressBar(refetchedData?.status ?? '');
        }
      }
    }, 8000);

    return () => {
      clearInterval(pollingInterval);
    };
  }, [task_id]);

  const updateProgressBar = (status: string) => {
    switch (status) {
      case 'started':
        setProgress(10);
        break;
      case 'processing started':
        setProgress(20);
        break;
      case 'downloading video':
        setProgress(40);
        break;
      case 'resizing video':
        setProgress(50);
        break;
      case 'adding subtitle':
        setProgress(60);
        break;
      case 'extracting highlights':
        setProgress(70);
        break;
      case 'saving video to S3':
        setProgress(90);
        break;
      case 'completed':
        setProgress(100);
        break;
      default:
        break;
    }
    setprocessMessage(status);
  };

  useEffect(() => {
    if (data) {
      sessionStorage.setItem('status', data.status);
      updateProgressBar(data.status);
    }
  }, [data]);

  return (
    <LoadingContainer>
      <Loading progress={progress} progressMessage={processMessage} />
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
