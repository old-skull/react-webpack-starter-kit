import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';

export const NotFoundRoute: FC<unknown> = () => {
  const { pathname } = useLocation();

  return (
    <Box textAlign="center">
      <code>{pathname}</code>
    </Box>
  );
};
