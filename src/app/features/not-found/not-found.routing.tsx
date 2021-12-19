import { RouteObject } from 'react-router-dom';
import { NotFoundPage } from './index';

export const notFoundRouting: RouteObject[] = [
  {
    path: '404',
    element: <NotFoundPage />,
  },
  { path: '*', element: <NotFoundPage /> },
];
