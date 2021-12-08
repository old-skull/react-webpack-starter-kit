import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
} from '@chakra-ui/react';
import { DrawerMenu, IDrawerLink } from '@features/drawer';
import { ThemeSwitch } from '@features/theme';
import { FC, RefObject } from 'react';

interface IDrawer {
  isOpen: boolean;
  onClose: () => void;
  finalRef: RefObject<HTMLButtonElement>;
}

export const Drawer: FC<IDrawer> = ({ isOpen, onClose, finalRef }) => {
  const drawerMenuLinks: IDrawerLink[] = [
    { to: '/', label: 'Home' },
    { to: '/characters', label: 'Characters' },
  ];

  return (
    <ChakraDrawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={finalRef}
      closeOnEsc
    >
      <DrawerOverlay />

      <DrawerContent>
        <DrawerHeader>
          <DrawerCloseButton />

          <Flex gridGap={2} align="center">
            <ThemeSwitch />
          </Flex>
        </DrawerHeader>

        <DrawerBody>
          <DrawerMenu navLinks={drawerMenuLinks} onClose={onClose} />
        </DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  );
};
