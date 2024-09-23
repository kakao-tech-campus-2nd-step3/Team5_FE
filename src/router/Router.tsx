import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from '@/pages/ErrorPage';
import RootPage from '@/pages/RootPage';
import MainPage from '@/pages/main/MainPage';

export const Router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    id: 'root',
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MainPage /> }
    ],
  },
]);
