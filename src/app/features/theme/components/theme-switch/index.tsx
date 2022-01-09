import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { FC } from 'react';

export const ThemeSwitch: FC<unknown> = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      className="theme-switch"
      aria-label="Toggle theme"
      onClick={toggleColorMode}
      icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
    />
  );
};
