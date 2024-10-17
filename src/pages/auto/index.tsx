import styled from 'styled-components';

import { ConvertForm, Progress } from '@/pages/auto/components';

const AutoShortsPage = () => {
  return (
    <AutoContainer>
      <Progress />
      <ConvertForm />
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
