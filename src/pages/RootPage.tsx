import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

import Sidebar from '@/components/feature/sidebar';

import { ProcessProvider } from '@/pages/auto/provider';

const RootPage = () => {
  return (
    <RootContainer>
      <ProcessProvider>
        <Sidebar />
        <RootWrapper>
          <Outlet />
        </RootWrapper>
      </ProcessProvider>
    </RootContainer>
  );
};

export default RootPage;

const RootContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const RootWrapper = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
