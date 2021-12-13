import { FC } from 'react';
import { useParams } from 'react-router-dom';

export const CharacterPage: FC<unknown> = () => {
  const { id } = useParams();

  return <>{id}</>;
};
