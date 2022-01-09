import { Heading } from '@chakra-ui/react';
import { FC } from 'react';

interface ICharactersTitle {
  title: string;
  charactersCount: number;
}

export const CharactersTitle: FC<ICharactersTitle> = ({ title, charactersCount }) => (
  <Heading className="characters-title" size="md">
    {title}: {charactersCount}
  </Heading>
);
