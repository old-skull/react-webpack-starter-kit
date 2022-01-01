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
import { FC } from 'react';
import { useForm } from 'react-hook-form';

export const CharacterCreateForm: FC<unknown> = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      characterName: '',
      characterDescription: '',
    },
  });

  const onSubmit = values => console.log(values);

  return (
    <Stack as="form" spacing={4} onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.characterName}>
        <FormLabel htmlFor="characterName">Name *</FormLabel>
        <Input
          id="characterName"
          {...register('characterName', {
            required: 'This is required',
            minLength: { value: 2, message: 'Minimum length should be 2' },
          })}
        />
        <FormErrorMessage>{errors.characterName && errors.characterName.message}</FormErrorMessage>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="characterDescription">Description</FormLabel>
        <Textarea id="characterDescription" {...register('characterDescription')} />
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
