import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import { charactersActions, ICharacter } from '@features/characters';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

interface ICharacterEditForm {
  character: ICharacter;
  navigate: () => void;
}

export const CharacterEditForm: FC<ICharacterEditForm> = ({ character, navigate }) => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: character,
  });

  const dispatch = useDispatch();

  const onSubmit = (values: ICharacter) => {
    dispatch(charactersActions.updateOne({ id: character.id, changes: values }));
    navigate();
  };

  return (
    <Stack className="character-edit-form" as="form" spacing={4} onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.name}>
        <FormLabel htmlFor="name">Name *</FormLabel>
        <Input
          id="name"
          {...register('name', {
            required: 'This is required',
            minLength: { value: 2, message: 'Minimum length should be 2' },
          })}
        />
        <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="description">Description</FormLabel>
        <Textarea id="description" {...register('description')} />
      </FormControl>

      <FormControl isInvalid={!!errors.caption}>
        <FormLabel htmlFor="caption">Caption</FormLabel>
        <Input
          id="caption"
          {...register('caption', {
            maxLength: {
              value: 150,
              message: `Maximum length should be 150. Current length ${
                getValues('caption').length
              }`,
            },
          })}
        />
        <FormErrorMessage>{errors.caption && errors.caption.message}</FormErrorMessage>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="avatar">Avatar</FormLabel>
        <Input id="avatar" {...register('avatar')} />
      </FormControl>

      <Flex gridGap={2} justifyContent="space-between">
        <Button colorScheme="orange" type="reset" onClick={() => reset()}>
          Reset
        </Button>
        <Button colorScheme="teal" type="submit" isLoading={isSubmitting}>
          Submit
        </Button>
      </Flex>
    </Stack>
  );
};
