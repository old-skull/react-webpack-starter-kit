import { HamburgerIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { FC } from 'react';

interface IDrawerOpenBtn {
  onOpen: () => void;
}

export const DrawerOpenBtn: FC<IDrawerOpenBtn> = ({ onOpen }) => (
  <IconButton
    className="drawer-open-btn"
    aria-label="Open drawer"
    onClick={onOpen}
    icon={<HamburgerIcon />}
  />
);
