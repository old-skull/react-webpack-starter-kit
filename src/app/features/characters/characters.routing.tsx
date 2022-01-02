import { RouteObject } from 'react-router-dom';
import { CharacterCreatePage, CharacterEditPage, CharacterPage, CharactersPage } from './index';

export const charactersRouting: RouteObject[] = [
  {
    path: 'characters',
    children: [
      {
        index: true,
        element: <CharactersPage />,
      },
      { path: '/characters/:id', element: <CharacterPage /> },
      { path: '/characters/new', element: <CharacterCreatePage /> },
      { path: '/characters/edit/:id', element: <CharacterEditPage /> },
    ],
  },
];
