import styled from 'styled-components';

import { Button } from '@/components';

import ConvertShorts from './ConvertShorts';

const FinalView = () => {
  return (
    <ViewContainer>
      <ConvertShorts />
      <Button variant='default' type='button'>
        변환하기
      </Button>
    </ViewContainer>
  );
};

export default FinalView;

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 864px;
  height: 616px;
  justify-content: center;
  align-items: center;
  gap: 76px;
`;
