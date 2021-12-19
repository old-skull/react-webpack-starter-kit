import { CharacterPage, CharactersPage, CreateCharacterPage } from '@features/characters';
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
        children: [
          {
            index: true,
            element: <CharactersPage />,
          },
          { path: '/characters/:id', element: <CharacterPage /> },
          { path: '/characters/new', element: <CreateCharacterPage /> },
        ],
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];
