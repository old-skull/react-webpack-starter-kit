import { Flex } from '@chakra-ui/react';
import { DrawerOpenBtn } from '@features/drawer';
import { HeaderTitle } from '@features/header';
import { FC } from 'react';

interface IHeader {
  onOpen: () => void;
}

export const Header: FC<IHeader> = ({ onOpen }) => {
  const title = 'Witcher';

  return (
    <Flex className="header" as="header" gridGap={4} justify="space-between">
      <HeaderTitle title={title} />
      <DrawerOpenBtn onOpen={onOpen} />
    </Flex>
  );
};
