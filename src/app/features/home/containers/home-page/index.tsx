import { Heading } from '@chakra-ui/react';
import { useDocumentTitle } from '@shared/hooks';
import { FC } from 'react';

export const HomePage: FC<unknown> = () => {
  const title = 'Home';
  useDocumentTitle(title);

  return (
    <div>
      <Heading size="md">Home</Heading>
    </div>
  );
};
