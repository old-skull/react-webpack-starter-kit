import { Button } from '@chakra-ui/react';
import { Link } from '@shared/components';
import { FC } from 'react';

interface CharacterEditBtn {
  id: string;
}

export const CharacterEditBtn: FC<CharacterEditBtn> = ({ id }) => {
  return (
    <Button
      as={Link}
      colorScheme="teal"
      to={`/characters/edit/${id}`}
      _hover={{ textDecoration: 'none' }}
    >
      Edit
    </Button>
  );
};
