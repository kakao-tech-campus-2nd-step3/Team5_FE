import styled from 'styled-components';

import ConvertForm from './components/ConvertForm';
import Progress from './components/Progress';

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
