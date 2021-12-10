import { Button, Stack } from '@chakra-ui/react';
import { NotFoundRoute, NotFoundTitle } from '@features/not-found';
import { Link } from '@shared/components';
import { FC } from 'react';

export const NotFoundPage: FC<unknown> = () => {
  return (
    <Stack spacing={4} alignItems="center">
      <NotFoundTitle />
      <NotFoundRoute />
      <Link to="/">
        <Button>Go Home</Button>
      </Link>
    </Stack>
  );
};
