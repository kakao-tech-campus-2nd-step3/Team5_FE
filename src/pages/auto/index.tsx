import { useEffect } from 'react';

import styled from 'styled-components';

import {
  ConvertForm,
  FinalView,
  Process,
  ProgressView,
} from '@/pages/auto/components';

import { usePreventRefresh } from '@/hooks';

import { useProcessContext } from './provider';

const AutoShortsPage = () => {
  const { processState, setProcessState } = useProcessContext();

  const shouldPrevent = processState === 'final';
  usePreventRefresh(shouldPrevent);

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (shouldPrevent) {
        sessionStorage.setItem('processState', 'initial');
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [shouldPrevent]);

  return (
    <AutoContainer>
      <Process processState={processState} />
      {processState === 'initial' && (
        <ConvertForm setProcessState={setProcessState} />
      )}
      {processState === 'progress' && (
        <ProgressView setProcessState={setProcessState} />
      )}
      {processState === 'final' && <FinalView />}
    </AutoContainer>
  );
};

export default AutoShortsPage;

const AutoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  gap: 58px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
