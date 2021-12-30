import { Stack } from '@chakra-ui/react';
import { CharacterDescription, charactersSelectors, CharacterTitle } from '@features/characters';
import { RootState } from '@store';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

export const CharacterPage: FC<unknown> = () => {
  const { id } = useParams();
  const character = useSelector((state: RootState) => charactersSelectors.selectById(state, id));

  return character ? (
    <Stack spacing={4}>
      <CharacterTitle name={character.name} id={character.id} />
      <CharacterDescription description={character.description} />
    </Stack>
  ) : (
    <Navigate to="/404" />
  );
};
