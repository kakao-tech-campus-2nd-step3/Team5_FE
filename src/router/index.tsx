import { lazy } from 'react';
import {
  createBrowserRouter,
  IndexRouteObject,
  NonIndexRouteObject,
} from 'react-router-dom';

import { AsyncBoundary, LoadingView } from '@/components';

import { RouterPath } from './path';

const ErrorPage = lazy(() => import('@/pages/ErrorPage'));
const RootPage = lazy(() => import('@/pages/RootPage'));
const MainPage = lazy(() => import('@/pages/main/index'));
const AutoShortsPage = lazy(() => import('@/pages/auto/index'));

type AppRouteObject = (IndexRouteObject | NonIndexRouteObject) & {
  children?: AppRouteObject[];
};

const routesConfig: AppRouteObject[] = [
  {
    path: RouterPath.root,
    element: <RootPage />,
    id: 'root',
    children: [
      { index: true, path: RouterPath.main, element: <MainPage /> },
      { path: RouterPath.auto, element: <AutoShortsPage /> },
      { path: RouterPath.notFound, element: <ErrorPage /> },
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
          <AsyncBoundary
            pendingFallback={<LoadingView />}
            rejectedFallback={<>Load Error</>}
          >
            {element}
          </AsyncBoundary>
        ),
      } as AppRouteObject;
    } else {
      return {
        ...rest,
        element: (
          <AsyncBoundary
            pendingFallback={<LoadingView />}
            rejectedFallback={<>Load Error</>}
          >
            {element}
          </AsyncBoundary>
        ),
        children: children ? routesWithAsyncBoundary(children) : undefined,
      } as AppRouteObject;
    }
  });
};

export const Router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter(routesWithAsyncBoundary(routesConfig));
