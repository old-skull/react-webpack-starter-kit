import { Stack } from '@chakra-ui/react';
import { FC } from 'react';

interface ICharacterDescription {
  description: string;
}

export const CharacterDescription: FC<ICharacterDescription> = ({ description }) => {
  const separator = '\n\n';

  return (
    <Stack className="character-description" spacing={2}>
      {description.split(separator).map((d: string, i: number) => (
        <p key={i}>{d}</p>
      ))}
    </Stack>
  );
};
