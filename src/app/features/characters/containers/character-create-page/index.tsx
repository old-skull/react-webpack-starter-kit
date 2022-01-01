import { Heading, Stack } from '@chakra-ui/react';
import { CharacterCreateForm } from '@features/characters';
import { FC } from 'react';

export const CharacterCreatePage: FC<unknown> = () => {
  return (
    <Stack spacing={4}>
      <Heading size="md">Create character</Heading>

      <CharacterCreateForm />
    </Stack>
  );
};
