import { useState } from 'react';
import NextLink from 'next/link';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Divider,
  Text,
  Link,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  IconButton,
  Heading,
  Tooltip,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { IoIosEye, IoMdEyeOff } from 'react-icons/io';

const AuthForm = ({ authAction, onGoogleAuth, onSubmit, isLoading }) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <Box
      as="form"
      flexBasis="lg"
      padding="4"
      rounded="md"
      bgColor="white"
      shadow="sm"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack spacing="4">
        <Heading as="h2" fontSize="2xl" fontWeight="semibold">
          {authAction}
        </Heading>
        <Button
          variant="outline"
          leftIcon={<FcGoogle />}
          type="button"
          onClick={onGoogleAuth}
        >
          {authAction} with Google
        </Button>
      </Stack>

      <Divider h="1" marginY="4" />

      <Stack spacing="3" marginBottom="6">
        <FormControl isInvalid={errors.email}>
          <FormLabel htmlFor="email" fontSize="md" fontWeight="semibold">
            Email
          </FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            autoComplete="off"
            {...register('email', {
              required: 'Email is required.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address.',
              },
            })}
          />
          {errors.email && (
            <FormErrorMessage>{errors.email.message}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={errors.password}>
          <FormLabel htmlFor="password" fontSize="md" fontWeight="semibold">
            Password
          </FormLabel>

          <InputGroup>
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="********"
              autoComplete="off"
              {...register('password', {
                required: 'Password is required.',
                minLength: { value: 8, message: 'Password is too short.' },
              })}
            />
            <InputRightElement right="9px">
              {showPassword ? (
                <Tooltip label="Hide password" hasArrow>
                  <IconButton
                    height="65%"
                    icon={<IoMdEyeOff aria-label="Close Eye Password" />}
                    onClick={toggleShowPassword}
                  />
                </Tooltip>
              ) : (
                <Tooltip label="Show password" hasArrow>
                  <IconButton
                    height="65%"
                    icon={<IoIosEye aria-label="Open Eye Password" />}
                    onClick={toggleShowPassword}
                  />
                </Tooltip>
              )}
            </InputRightElement>
          </InputGroup>

          {errors.password && (
            <FormErrorMessage>{errors.password.message}</FormErrorMessage>
          )}
        </FormControl>
      </Stack>

      <Button
        colorScheme="blue"
        type="submit"
        isLoading={isLoading}
        isFullWidth
      >
        {authAction}
      </Button>

      <Divider h="1" marginY="4" />

      <Stack alignItems="center" spacing="1">
        <Text color="gray.500">
          {authAction === 'Log in'
            ? 'Already have an account?'
            : "Don't have an account?"}
        </Text>
        <NextLink href={authAction === 'Log in' ? '/signup' : 'login'} passHref>
          <Link fontSize="sm" fontWeight="semibold" color="blue.500">
            {authAction === 'Log in' ? 'Sign Up' : 'Log in'}
          </Link>
        </NextLink>
      </Stack>
    </Box>
  );
};

export default AuthForm;
