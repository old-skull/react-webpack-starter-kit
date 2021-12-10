import { CharactersPage } from '@features/characters';
import { HomePage } from '@features/home';
import { Layout } from '@features/layout';
import { NotFoundPage } from '@features/not-found';
import { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'characters',
        element: <CharactersPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];
