import { Heading, Stack } from '@chakra-ui/react';
import { CreateCharacterForm } from '@features/characters';
import { FC } from 'react';

export const CreateCharacterPage: FC<unknown> = () => {
  return (
    <Stack spacing={4}>
      <Heading size="md">Create character</Heading>

      <CreateCharacterForm />
    </Stack>
  );
};
