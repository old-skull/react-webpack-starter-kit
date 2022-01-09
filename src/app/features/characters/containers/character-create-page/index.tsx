import { Heading, Stack } from '@chakra-ui/react';
import { CharacterCreateForm } from '@features/characters';
import { useDocumentTitle } from '@shared/hooks';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const CharacterCreatePage: FC<unknown> = () => {
  const title = 'New';
  useDocumentTitle(title);

  const navigate = useNavigate();

  const onSubmit = () => navigate('/characters');

  return (
    <Stack className="character-create-page" spacing={4}>
      <Heading size="md">Create character</Heading>

      <CharacterCreateForm navigate={onSubmit} />
    </Stack>
  );
};
