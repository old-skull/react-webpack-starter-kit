import { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './app.routing';

export const App: FC<unknown> = () => {
  const appRouting = useRoutes(routes);

  return <>{appRouting}</>;
};
