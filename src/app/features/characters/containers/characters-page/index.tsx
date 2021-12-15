import { Heading, Stack } from '@chakra-ui/react';
import { charactersActions, CharactersList, charactersSelectors } from '@features/characters';
import { useDocumentTitle } from '@shared/hooks';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const CharactersPage: FC<unknown> = () => {
  const characters = useSelector(charactersSelectors.selectAll);
  const charactersLength = useSelector(charactersSelectors.selectTotal);
  const pageTitle = useSelector(charactersSelectors.selectCharactersPageTitle);
  const loaded = useSelector(charactersSelectors.selectCharactersLoaded);

  useDocumentTitle(pageTitle);

  const dispatch = useDispatch();
  // emulation of server delay to show skeleton
  setTimeout(() => dispatch(charactersActions.setLoaded()), 1000);

  return (
    <Stack spacing={4}>
      <Heading size="md">
        {pageTitle}: {charactersLength}
      </Heading>
      <CharactersList characters={characters} loaded={loaded} />
    </Stack>
  );
};
