import { IconButton } from '@chakra-ui/react';
import { FC } from 'react';
import { BsFillMenuButtonFill } from 'react-icons/bs';

interface IDrawerOpenBtn {
  onOpen: () => void;
}

export const DrawerOpenBtn: FC<IDrawerOpenBtn> = ({ onOpen }) => (
  <IconButton aria-label="Open drawer" onClick={onOpen} icon={<BsFillMenuButtonFill />} />
);
