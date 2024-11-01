import styled from 'styled-components';

import { ConvertForm, FinalView, Process } from '@/pages/auto/components';
import { ProgressView } from '@/pages/auto/components';

import { useProcessContext } from './provider';

const AutoShortsPage = () => {
  const { processState, setProcessState } = useProcessContext();

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
