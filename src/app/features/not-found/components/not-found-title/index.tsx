import { Heading } from '@chakra-ui/react';
import { FC } from 'react';

export const NotFoundTitle: FC<unknown> = () => {
  return (
    <Heading className="not-found-title" as="h1" size="2xl" textAlign="center">
      404
    </Heading>
  );
};
