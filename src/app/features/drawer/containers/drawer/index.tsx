import {
  Box,
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
} from '@chakra-ui/react';
import { NavigationMenu } from '@features/navigation-menu';
import { ThemeSwitch } from '@features/theme';
import { FC, RefObject } from 'react';

interface IDrawer {
  isOpen: boolean;
  onClose: () => void;
  finalRef: RefObject<HTMLButtonElement>;
}

export const Drawer: FC<IDrawer> = ({ isOpen, onClose, finalRef }) => {
  return (
    <Box className="drawer-container">
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
            <NavigationMenu clickHanlder={onClose} />
          </DrawerBody>
        </DrawerContent>
      </ChakraDrawer>
    </Box>
  );
};
