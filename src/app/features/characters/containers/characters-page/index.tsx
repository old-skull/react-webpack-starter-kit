import { Heading, Stack } from '@chakra-ui/react';
import {
  charactersActions,
  CharactersList,
  selectCharactersData,
  selectCharactersLoaded,
  selectCharactersPageTitle,
} from '@features/characters';
import { useDocumentTitle } from '@shared/hooks';
import { RootState } from '@store';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const CharactersPage: FC<unknown> = () => {
  const characters = useSelector((state: RootState) => selectCharactersData(state));
  const loaded = useSelector((state: RootState) => selectCharactersLoaded(state));
  const pageTitle = useSelector((state: RootState) => selectCharactersPageTitle(state));

  useDocumentTitle(pageTitle);

  const dispatch = useDispatch();
  // emulate server delay
  setTimeout(() => dispatch(charactersActions.setLoaded()), 1000);

  return (
    <Stack spacing={4}>
      <Heading size="md">
        {pageTitle}: {characters.length}
      </Heading>
      <CharactersList characters={characters} loaded={loaded} />
    </Stack>
  );
};
