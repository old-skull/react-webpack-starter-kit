import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { normalizeHref } from '@shared/utils';
import { FC, ReactNode } from 'react';
import {
  NavLink as RouterNavLink,
  NavLinkProps as RouterNavLinkProps,
  useLocation,
  useResolvedPath,
} from 'react-router-dom';

type TNavLinkProps = ChakraLinkProps & RouterNavLinkProps;

interface INavLink extends TNavLinkProps {
  children: ReactNode;
}

export const NavLink: FC<INavLink> = ({ children, to, end, ...rest }) => {
  const { pathname: locationPathname } = useLocation();
  const { pathname: toPathname } = useResolvedPath(to);

  const isActive =
    locationPathname === toPathname ||
    (!end &&
      locationPathname.startsWith(toPathname) &&
      locationPathname.charAt(toPathname.length) === '/');

  return (
    <ChakraLink
      className="nav-link"
      as={RouterNavLink}
      to={normalizeHref(to)}
      style={{ color: isActive ? 'teal' : 'currentColor' }}
      {...rest}
    >
      {children}
    </ChakraLink>
  );
};
