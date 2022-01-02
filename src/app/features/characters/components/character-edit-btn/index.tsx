import { Button } from '@chakra-ui/react';
import { Link } from '@shared/components';
import { FC } from 'react';

interface CharacterEditBtn {
  id: string;
}

export const CharacterEditBtn: FC<CharacterEditBtn> = ({ id }) => {
  return (
    <Link to={`/characters/edit/${id}`} _hover={{ textDecoration: 'none' }}>
      <Button colorScheme="teal">Edit</Button>
    </Link>
  );
};
