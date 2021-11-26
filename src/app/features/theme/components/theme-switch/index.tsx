import { IconButton, useColorMode } from '@chakra-ui/react';
import { FC } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

export const ThemeSwitch: FC<unknown> = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle theme"
      onClick={toggleColorMode}
      icon={colorMode === 'dark' ? <BsSun /> : <BsMoon />}
    />
  );
};
