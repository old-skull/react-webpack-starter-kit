import { Stack } from '@chakra-ui/react';
import { navigationLinks } from '@features/navigation-menu';
import { NavLink } from '@shared/components';
import { FC } from 'react';

interface INavigationMenu {
  clickHanlder?: () => void;
}

export const NavigationMenu: FC<INavigationMenu> = ({ clickHanlder }) => {
  return (
    <Stack className="navigation-menu" spacing={2}>
      {navigationLinks.map(({ to, label }) => (
        <NavLink to={to} key={`${to}_${label}`} onClick={clickHanlder}>
          {label}
        </NavLink>
      ))}
    </Stack>
  );
};
