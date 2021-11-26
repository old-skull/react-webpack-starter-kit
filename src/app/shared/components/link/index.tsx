import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

type TLinkProps = ChakraLinkProps & RouterLinkProps;

interface ILink extends TLinkProps {
  children: ReactNode;
}

export const Link: FC<ILink> = ({ children, to }) => {
  const formattedHref = to.toString().toLocaleLowerCase().trim().replace(/\s+/g, '-');

  return (
    <ChakraLink as={RouterLink} to={formattedHref}>
      {children}
    </ChakraLink>
  );
};
