import { Stack } from '@chakra-ui/react';
import { IDrawerLink } from '@features/drawer';
import { NavLink } from '@shared/components';
import { FC } from 'react';

interface IDrawerMenu {
  navLinks: IDrawerLink[];
  onClose: () => void;
}

export const DrawerMenu: FC<IDrawerMenu> = ({ navLinks, onClose }) => {
  return (
    <Stack spacing={2}>
      {navLinks.map(({ to, label }) => (
        <NavLink to={to} key={`${to}_${label}`} onClick={onClose}>
          {label}
        </NavLink>
      ))}
    </Stack>
  );
};
