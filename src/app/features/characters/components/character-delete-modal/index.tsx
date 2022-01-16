import {
  Box,
  Button,
  Code,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { FC } from 'react';

interface ICharacterDeleteModal {
  onConfirm: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export const CharacterDeleteModal: FC<ICharacterDeleteModal> = ({ onConfirm, onClose, isOpen }) => {
  return (
    <Box className="character-delete-modal-container">
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm action</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="grid" gridGap={4}>
            <Text>Are you sure you want to delete character?</Text>
            <Text fontStyle="italic">
              You will be navigated to the <Code>/characters</Code>
            </Text>
          </ModalBody>
          <ModalFooter display="flex" justifyContent="space-between">
            <Button colorScheme="yellow" mr={3} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="teal" onClick={onConfirm}>
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
