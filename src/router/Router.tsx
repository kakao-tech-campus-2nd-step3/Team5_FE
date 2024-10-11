import { lazy } from 'react';
import {
  createBrowserRouter,
  IndexRouteObject,
  NonIndexRouteObject,
} from 'react-router-dom';

import { LoadingView } from '@/components/common';
import * as CommonUI from '@/components/common';

const ErrorPage = lazy(() => import('@/pages/ErrorPage'));
const RootPage = lazy(() => import('@/pages/RootPage'));
const MainPage = lazy(() => import('@/pages/main/index'));
const AutoShortsPage = lazy(() => import('@/pages/auto/index'));

type AppRouteObject = (IndexRouteObject | NonIndexRouteObject) & {
  children?: AppRouteObject[];
};

const routesConfig: AppRouteObject[] = [
  {
    path: '/',
    element: <RootPage />,
    id: 'root',
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MainPage /> },
      { path: '/auto', element: <AutoShortsPage /> },
    ],
  },
];

const routesWithAsyncBoundary = (
  routes: AppRouteObject[]
): AppRouteObject[] => {
  return routes.map((route) => {
    const { element, children, ...rest } = route;

    if ('index' in route) {
      return {
        ...rest,
        element: (
          <CommonUI.AsyncBoundary
            pendingFallback={<LoadingView />}
            rejectedFallback={<>Load Error</>}
          >
            {element}
          </CommonUI.AsyncBoundary>
        ),
      } as AppRouteObject;
    } else {
      return {
        ...rest,
        element: (
          <CommonUI.AsyncBoundary
            pendingFallback={<LoadingView />}
            rejectedFallback={<>Load Error</>}
          >
            {element}
          </CommonUI.AsyncBoundary>
        ),
        children: children ? routesWithAsyncBoundary(children) : undefined,
      } as AppRouteObject;
    }
  });
};

export const Router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter(routesWithAsyncBoundary(routesConfig));
