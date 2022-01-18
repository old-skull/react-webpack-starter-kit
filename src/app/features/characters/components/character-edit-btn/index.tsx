import { Button } from '@chakra-ui/react';
import { Link } from '@shared/components';
import { FC } from 'react';

interface ICharacterEditBtn {
  id: string;
}

export const CharacterEditBtn: FC<ICharacterEditBtn> = ({ id }) => {
  return (
    <Button
      className="character-edit-btn"
      as={Link}
      colorScheme="teal"
      to={`/characters/edit/${id}`}
    >
      Edit
    </Button>
  );
};
