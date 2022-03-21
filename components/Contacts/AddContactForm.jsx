import { useEffect } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  ButtonGroup,
  Button,
  Stack,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const AddContactForm = ({ onSubmit, onCancel }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, isDirty, isSubmitSuccessful },
  } = useForm({ mode: 'onTouched' });

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing="1" mb="6">
        <FormControl isRequired>
          <FormLabel htmlFor="fullName" fontSize="md" fontWeight="semibold">
            Full Name
          </FormLabel>
          <Input
            id="fullName"
            placeholder="John Smith"
            autoComplete="off"
            {...register('fullName', {
              required: 'Full name is required.',
            })}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="address" fontSize="md" fontWeight="semibold">
            Address
          </FormLabel>
          <Input
            id="address"
            placeholder="Address"
            autoComplete="off"
            {...register('address', {
              required: 'Address is required.',
            })}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="phoneNumber" fontSize="md" fontWeight="semibold">
            Phone Number
          </FormLabel>
          <Input
            id="phoneNumber"
            placeholder="+1 (234) 567-8901"
            autoComplete="off"
            {...register('phoneNumber', {
              required: 'Phone number is required.',
            })}
          />
        </FormControl>
      </Stack>

      <ButtonGroup d="flex" justifyContent="flex-end">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          colorScheme="teal"
          type="submit"
          disabled={!isDirty || !isValid}
        >
          Save
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default AddContactForm;
