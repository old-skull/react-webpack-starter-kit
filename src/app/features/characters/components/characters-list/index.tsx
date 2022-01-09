import { SimpleGrid, Skeleton } from '@chakra-ui/react';
import { CharacterCard, ICharacter } from '@features/characters';
import { FC } from 'react';

interface ICharactersList {
  characters: ICharacter[];
  loaded: boolean;
}

export const CharactersList: FC<ICharactersList> = ({ characters, loaded }) => (
  <SimpleGrid className="characters-list" spacing={4} columns={[1, 1, 2, 3]}>
    {characters.map(c => (
      <Skeleton key={c.id} isLoaded={loaded}>
        <CharacterCard character={c} />
      </Skeleton>
    ))}
  </SimpleGrid>
);
