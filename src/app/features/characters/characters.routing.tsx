import { RouteObject } from 'react-router-dom';
import { CharacterPage, CharactersPage, CreateCharacterPage } from './index';

export const charactersRouting: RouteObject[] = [
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
];
