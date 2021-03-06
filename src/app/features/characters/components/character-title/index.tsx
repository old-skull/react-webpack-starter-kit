import { Code, Heading } from '@chakra-ui/react';
import { FC } from 'react';

interface ICharacterTitle {
  name: string;
  id: string;
}

export const CharacterTitle: FC<ICharacterTitle> = ({ name, id }) => (
  <Heading className="character-title" size="md">
    {name} <Code>#{id}</Code>
  </Heading>
);
