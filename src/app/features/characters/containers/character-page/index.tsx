import { Flex, Stack } from '@chakra-ui/react';
import {
  CharacterDeleteBtn,
  CharacterDescription,
  charactersActions,
  charactersSelectors,
  CharacterTitle,
} from '@features/characters';
import { useDocumentTitle } from '@shared/hooks';
import { RootState } from '@store';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

export const CharacterPage: FC<unknown> = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const character = useSelector((state: RootState) => charactersSelectors.selectById(state, id));

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(charactersActions.removeOne(id));
    navigate('/characters');
  };

  if (!character) return <Navigate to="/404" />;

  const { name, description } = character;

  useDocumentTitle(name);

  return (
    <Stack spacing={4}>
      <CharacterTitle name={name} id={id} />
      <CharacterDescription description={description} />
      <Flex>
        <CharacterDeleteBtn handleDelete={handleDelete} />
      </Flex>
    </Stack>
  );
};
