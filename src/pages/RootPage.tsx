import React from 'react';
import { Outlet } from 'react-router-dom';

const RootPage = () => {
  return (
    <>
      <div>RootPage</div>
      <Outlet />
    </>
  );
};

export default RootPage;
