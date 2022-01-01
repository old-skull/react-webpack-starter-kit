import { Button, useDisclosure } from '@chakra-ui/react';
import { FC } from 'react';
import { CharacterDeleteModal } from '..';

interface ICharacterDeleteBtn {
  handleDelete: () => void;
}

export const CharacterDeleteBtn: FC<ICharacterDeleteBtn> = ({ handleDelete }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const deleteAndClose = () => {
    handleDelete();
    onClose();
  };

  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>
        Delete
      </Button>
      <CharacterDeleteModal onConfirm={deleteAndClose} isOpen={isOpen} onClose={onClose} />
    </>
  );
};
