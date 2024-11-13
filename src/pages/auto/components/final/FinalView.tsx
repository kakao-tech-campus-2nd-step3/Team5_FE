import styled from 'styled-components';

import { Button } from '@/components';

import { useProcessContext } from '@/pages/auto/provider';

import ConvertShorts from './ConvertShorts';

const FinalView = () => {
  const { setProcessState } = useProcessContext();

  const handleInit = () => {
    const userConfirmed = window.confirm(
      '초기화하면 모든 데이터가 삭제됩니다. 계속하시겠습니까?'
    );

    if (userConfirmed) {
      setProcessState('initial');
    }
  };

  return (
    <ViewContainer>
      <ConvertShorts />
      <ButtonWrapper>
        <Button variant='default' type='button'>
          변환하기
        </Button>
        <Button variant='default' type='button' onClick={handleInit}>
          다시 추출하기
        </Button>
      </ButtonWrapper>
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

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;
