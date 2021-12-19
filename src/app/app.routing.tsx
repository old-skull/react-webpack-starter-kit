import { charactersRouting } from '@features/characters/characters.routing';
import { homeRouting } from '@features/home/home.routing';
import { Layout } from '@features/layout';
import { notFoundRouting } from '@features/not-found/not-found.routing';
import { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [...homeRouting, ...charactersRouting, ...notFoundRouting],
  },
];
