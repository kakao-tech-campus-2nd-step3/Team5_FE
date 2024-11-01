import styled from 'styled-components';

import { Spinner } from '@/components/common/spinner';

export const LoadingView = () => (
  <SpinnerWrapper>
    <Spinner />
  </SpinnerWrapper>
);
const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 80px 16px;
`;
