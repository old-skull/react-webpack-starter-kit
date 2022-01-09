import { Stack } from '@chakra-ui/react';
import { FC } from 'react';

interface ICharacterDescription {
  description: string[];
}

export const CharacterDescription: FC<ICharacterDescription> = ({ description }) => (
  <Stack className="character-description" spacing={2}>
    {description.map((d: string, i: number) => (
      <p key={i}>{d}</p>
    ))}
  </Stack>
);
