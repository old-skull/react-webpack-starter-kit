import { Code, Heading, Stack } from '@chakra-ui/react';
import { charactersSelectors } from '@features/characters';
import { RootState } from '@store';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

export const CharacterPage: FC<unknown> = () => {
  const { id } = useParams();
  const character = useSelector((state: RootState) => charactersSelectors.selectById(state, id));

  return character ? (
    <Stack spacing={4}>
      <Heading size="md">
        {character.name} <Code>#{id}</Code>
      </Heading>

      <Stack spacing={2}>
        {character.description.map((d, i) => (
          <p key={i}>{d}</p>
        ))}
      </Stack>
    </Stack>
  ) : (
    <Navigate to="/404" />
  );
};
