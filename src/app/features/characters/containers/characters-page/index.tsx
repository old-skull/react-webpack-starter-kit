import { Heading, Stack } from '@chakra-ui/react';
import { CharactersList, setLoaded } from '@features/characters';
import { useDocumentTitle } from '@shared/hooks';
import { RootState } from '@store';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const CharactersPage: FC<unknown> = () => {
  const characters = useSelector((state: RootState) => state.characters.data);
  const loaded = useSelector((state: RootState) => state.characters.loaded);
  const pageTitle = useSelector((state: RootState) => state.characters.pageTitle);

  useDocumentTitle(pageTitle);

  const dispatch = useDispatch();
  // emulate server delay
  setTimeout(() => dispatch(setLoaded()), 1000);

  return (
    <Stack spacing={4}>
      <Heading size="md">
        {pageTitle}: {characters.length}
      </Heading>
      <CharactersList characters={characters} loaded={loaded} />
    </Stack>
  );
};
