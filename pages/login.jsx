import Head from 'next/head';
import { Flex } from '@chakra-ui/react';

import { useAuthContext } from '@lib/contexts/auth.context';
import { AuthForm } from '@components/Auth';

const LoginPage = () => {
  const { signInWithCredentials, signInWithGoogle, isLoading } =
    useAuthContext();

  const onSubmit = (userCredentials) => {
    signInWithCredentials(userCredentials);
  };

  return (
    <Flex alignItems="center" justifyContent="center" minHeight="100vh">
      <Head>
        <title>Login | Contacts</title>
      </Head>

      <AuthForm
        authAction="Log in"
        onSubmit={onSubmit}
        onGoogleAuth={signInWithGoogle}
        isLoading={isLoading}
      />
    </Flex>
  );
};

export default LoginPage;
