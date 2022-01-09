import { Heading, Stack } from '@chakra-ui/react';
import { NavigationMenu } from '@features/navigation-menu';
import { useDocumentTitle } from '@shared/hooks';
import { FC } from 'react';

export const HomePage: FC<unknown> = () => {
  const title = 'Home';
  useDocumentTitle(title);

  return (
    <Stack className="home-page" spacing={4}>
      <Heading size="md">{title}</Heading>
      <NavigationMenu />
    </Stack>
  );
};
