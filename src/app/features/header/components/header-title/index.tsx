import { Heading } from '@chakra-ui/react';
import { Link } from '@shared/components';
import { FC, ReactNode } from 'react';

interface IHeaderTitle {
  title: ReactNode;
}

export const HeaderTitle: FC<IHeaderTitle> = ({ title }) => (
  <Heading className="header-title" as="h1" size="xl">
    <Link to="/">{title}</Link>
  </Heading>
);
