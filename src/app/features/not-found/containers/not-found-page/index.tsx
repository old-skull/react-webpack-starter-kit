import { Button, Stack } from '@chakra-ui/react';
import { NotFoundRoute, NotFoundTitle } from '@features/not-found';
import { Link } from '@shared/components';
import { FC } from 'react';

export const NotFoundPage: FC<unknown> = () => {
  return (
    <Stack className="not-found-page" spacing={4} alignItems="center">
      <NotFoundTitle />
      <NotFoundRoute />
      <Button as={Link} to="/">
        Go Home
      </Button>
    </Stack>
  );
};
