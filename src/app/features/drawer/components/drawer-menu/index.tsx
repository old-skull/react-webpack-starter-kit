import { Stack } from '@chakra-ui/react';
import { IDrawerLink } from '@features/drawer';
import { Link } from '@shared/components';
import { FC } from 'react';

interface IDrawerMenu {
  navLinks: IDrawerLink[];
}

export const DrawerMenu: FC<IDrawerMenu> = ({ navLinks }) => {
  return (
    <Stack spacing={2}>
      {navLinks.map(({ to, label }) => (
        <Link to={to} key={`${to}_${label}`}>
          {label}
        </Link>
      ))}
    </Stack>
  );
};
