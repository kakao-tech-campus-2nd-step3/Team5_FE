import {
  createBrowserRouter,
  IndexRouteObject,
  NonIndexRouteObject,
} from 'react-router-dom';

import { AsyncBoundary } from '@/components/common/AsyncBoundary';
import { LoadingView } from '@/components/common/view/LoadingView';

import ErrorPage from '@/pages/ErrorPage';
import RootPage from '@/pages/RootPage';
import MainPage from '@/pages/main/index';

type AppRouteObject = (IndexRouteObject | NonIndexRouteObject) & {
  children?: AppRouteObject[];
};

const routesConfig: AppRouteObject[] = [
  {
    path: '/',
    element: <RootPage />,
    id: 'root',
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <MainPage /> }],
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
          <AsyncBoundary pendingFallback={<LoadingView />}>
            {element}
          </AsyncBoundary>
        ),
      } as AppRouteObject;
    } else {
      return {
        ...rest,
        element: (
          <AsyncBoundary pendingFallback={<LoadingView />}>
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
