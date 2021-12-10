import { CharactersPage } from '@features/characters';
import { HomePage } from '@features/home';
import { Layout } from '@features/layout';
import { NotFoundPage } from '@features/not-found';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

export const App: FC<unknown> = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="characters" element={<CharactersPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
