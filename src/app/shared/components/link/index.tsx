import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { normalizeHref } from '@shared/utils';
import { FC, ReactNode } from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

type TLinkProps = ChakraLinkProps & RouterLinkProps;

interface ILink extends TLinkProps {
  children: ReactNode;
}

export const Link: FC<ILink> = ({ children, to, ...rest }) => {
  return (
    <ChakraLink as={RouterLink} to={normalizeHref(to)} {...rest}>
      {children}
    </ChakraLink>
  );
};
