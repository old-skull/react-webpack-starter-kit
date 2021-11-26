import { Stack, useDisclosure } from '@chakra-ui/react';
import { Drawer } from '@features/drawer';
import { Header } from '@features/header';
import { FC, useRef } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout: FC<unknown> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <Stack direction="column" p={4} spacing={4}>
      <Header onOpen={onOpen} />
      <Outlet />

      <Drawer isOpen={isOpen} onClose={onClose} finalRef={btnRef} />
    </Stack>
  );
};
