import { Heading, Stack } from '@chakra-ui/react';
import { charactersSelectors } from '@features/characters';
import { CharacterEditForm } from '@features/characters/components/character-edit-form';
import { useDocumentTitle } from '@shared/hooks';
import { RootState } from '@store';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

export const CharacterEditPage: FC<unknown> = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const character = useSelector((state: RootState) => charactersSelectors.selectById(state, id));

  if (!character) return <Navigate to="/404" />;

  const { name } = character;

  useDocumentTitle(`Edit: ${name}`);

  const onSubmit = () => navigate(`/characters/${id}`);

  return (
    <Stack className="character-edit-page" spacing={4}>
      <Heading size="md">Edit character</Heading>

      <CharacterEditForm character={character} navigate={onSubmit} />
    </Stack>
  );
};
