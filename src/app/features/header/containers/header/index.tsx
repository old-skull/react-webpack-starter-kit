import { Flex } from '@chakra-ui/react';
import { DrawerOpenBtn } from '@features/drawer';
import { HeaderTitle } from '@features/header';
import { FC } from 'react';

interface IHeader {
  onOpen: () => void;
}

export const Header: FC<IHeader> = ({ onOpen }) => {
  return (
    <Flex as="header" gridGap={4} justify="space-between">
      <HeaderTitle>Witcher</HeaderTitle>
      <DrawerOpenBtn onOpen={onOpen} />
    </Flex>
  );
};
