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
  const task_id = sessionStorage.getItem('task_id'); // sessionStorage에서 task_id 가져오기

  const { data } = usefetchTaskStatus(task_id ?? ''); // 상태 요청

  useEffect(() => {
    const pollingInterval = setInterval(() => {
      if (task_id) {
        const status = sessionStorage.getItem('status');
        if (status) {
          updateProgressBar(status);
        }
      }
    }, 3000);

    return () => {
      clearInterval(pollingInterval);
    };
  }, [task_id]);

  const updateProgressBar = (status: string) => {
    switch (status) {
      case 'started':
        setProgress(10); // 시작
        break;
      case 'processing started':
        setProgress(20); // 처리 시작
        break;
      case 'downloading video':
        setProgress(40); // 비디오 다운로드
        break;
      case 'resizing video':
        setProgress(50); // 비디오 크기 조정
        break;
      case 'adding subtitle':
        setProgress(60); // 자막 추가
        break;
      case 'extracting highlights':
        setProgress(70); // 하이라이트 추출
        break;
      case 'saving video to S3':
        setProgress(90); // 비디오 저장
        break;
      case 'completed':
        setProgress(100); // 완료
        setProcessState('final'); // 완료되면 상태를 'final'로 변경
        sessionStorage.setItem('status', 'completed');
        break;
      default:
        break;
    }
  };

  // 상태에 따른 진행 상태 업데이트
  useEffect(() => {
    if (data) {
      sessionStorage.setItem('status', data.status);
      updateProgressBar(data.status);
      setprocessMessage(data.status);
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
