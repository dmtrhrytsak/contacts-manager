import Head from 'next/head';
import { Flex } from '@chakra-ui/react';

import { useAuthContext } from '@lib/contexts/auth.context';
import { AuthForm } from '../components/Auth';

const SignupPage = () => {
  const { createUserWithCredentials, isLoading } = useAuthContext();

  const onSubmit = (userCredentials) => {
    createUserWithCredentials(userCredentials);
  };

  return (
    <Flex alignItems="center" justifyContent="center" minHeight="100vh">
      <Head>
        <title>Signup | Contacts</title>
      </Head>

      <AuthForm
        authAction="Sign up"
        onSubmit={onSubmit}
        isLoading={isLoading}
      />
    </Flex>
  );
};

export default SignupPage;
