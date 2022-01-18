import { AddIcon } from '@chakra-ui/icons';
import { Button, Flex, useColorMode } from '@chakra-ui/react';
import { Link } from '@shared/components';
import { FC } from 'react';

export const CharactersNewCard: FC<unknown> = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      minH="200px"
      className="characters-new-card"
      padding={2}
      bg={colorMode === 'dark' ? 'whiteAlpha.200' : 'blackAlpha.200'}
      rounded="md"
      _focusWithin={{ outline: '2px solid teal' }}
      justifyContent="center"
      alignItems="center"
      aria-label="Go to create character page"
    >
      <Button as={Link} colorScheme="teal" to="/characters/new" w="100%" h="100%">
        <AddIcon boxSize={6} aria-hidden />
      </Button>
    </Flex>
  );
};
