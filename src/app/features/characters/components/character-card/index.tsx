import {
  Avatar,
  Box,
  Flex,
  Heading,
  Icon,
  useBreakpointValue,
  useColorMode,
} from '@chakra-ui/react';
import { ICharacter } from '@features/characters';
import { Link } from '@shared/components';
import { FC } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import './card.scss';

interface ICharacterCard {
  character: ICharacter;
}

export const CharacterCard: FC<ICharacterCard> = ({ character }) => {
  const { name, avatar, caption, id } = character;
  const { colorMode } = useColorMode();
  const avatarSize = useBreakpointValue({ md: '2xl', sm: 'xl' });

  return (
    <Flex
      className="character-card"
      padding={2}
      borderLeft="6px solid teal"
      bg={colorMode === 'dark' ? 'whiteAlpha.200' : 'blackAlpha.200'}
      rounded="md"
      position="relative"
      overflow="hidden"
      _focusWithin={{ outline: '2px solid teal' }}
    >
      <Flex
        className="character-card__content"
        align="center"
        gridGap={2}
        w="100%"
        transitionProperty="transform"
        transitionDuration="0.8s"
        _groupHover={{ transform: 'translateX(5rem)' }}
      >
        <Avatar size={avatarSize} name={name} src={avatar} bg="transparent" />
        <Heading as="h6" size="sm" isTruncated>
          {name}
        </Heading>
      </Flex>

      <Flex
        alignItems="center"
        className="character-card__caption"
        position="absolute"
        color="white"
        top="0"
        bottom="0"
        opacity="0"
        left="0"
        w="100%"
        h="100%"
        transform="translateX(-100%)"
        p={2}
        bg="teal"
        overflowY="auto"
        transition="transform 0.4s, opacity 0.1s 0.3s"
        gridGap={2}
      >
        <Box textAlign="justify">{caption}</Box>
        <Box>
          <Link to={id}>
            <Icon boxSize="6" as={BsFillArrowRightCircleFill} />
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};
