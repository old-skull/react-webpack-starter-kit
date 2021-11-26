import { Heading } from '@chakra-ui/react';
import { Link } from '@shared/components';
import { FC, ReactNode } from 'react';

interface IHeaderTitle {
  children: ReactNode;
}

export const HeaderTitle: FC<IHeaderTitle> = ({ children }) => (
  <Heading as="h1" size="xl">
    <Link to="/">{children}</Link>
  </Heading>
);
