import { lazy } from 'react';
import {
  createBrowserRouter,
  IndexRouteObject,
  NonIndexRouteObject,
} from 'react-router-dom';

import { AsyncBoundary, LoadingView } from '@/components';

import { RouterPath } from './path';

const AddPage = lazy(() => import('@/pages/add'));
const ErrorPage = lazy(() => import('@/pages/ErrorPage'));
const RootPage = lazy(() => import('@/pages/RootPage'));
const MainPage = lazy(() => import('@/pages/main'));
const MyPage = lazy(() => import('@/pages/myPage'));
const AutoShortsPage = lazy(() => import('@/pages/auto'));
const ShortsViewerPage = lazy(() => import('@/pages/viewer'));
const RedirectPage = lazy(() => import('@/pages/redirect'));

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
      { path: RouterPath.myPage, element: <MyPage /> },
      { path: RouterPath.notFound, element: <ErrorPage /> },
      { path: RouterPath.videos, element: <ShortsViewerPage /> },
    ],
  },
  { path: RouterPath.add, element: <AddPage /> },
  { path: RouterPath.redirect, element: <RedirectPage /> },
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
