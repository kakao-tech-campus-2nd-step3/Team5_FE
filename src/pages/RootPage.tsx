import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Sidebar from '@/components/feature/sidebar';

const RootPage = () => {
  return (
    <RootContainer>
      <Sidebar />
      <RootWrapper>
        <Outlet />
      </RootWrapper>
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
