import { Outlet } from 'react-router-dom';

import Sidebar from '@/components/feature/sidebar';

const RootPage = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default RootPage;
