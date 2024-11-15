import { Button } from '@/components';

import { useProcessContext } from '@/pages/auto/provider';

const InitBtn = () => {
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
    <Button variant='default' type='button' onClick={handleInit}>
      다시 추출하기
    </Button>
  );
};

export default InitBtn;
