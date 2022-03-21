import Head from 'next/head';
import { Container } from '@chakra-ui/react';

import { useAuthContext } from '@lib/contexts/auth.context';
import { Navigation } from '@components/Shared';

const MainLayout = ({ children }) => {
  const { user, logOff } = useAuthContext();

  return (
    <>
      <Head>
        <title>Contacts</title>
        <meta name="description" content="Your contacts manager" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {user && <Navigation onLogOff={logOff} />}
      <Container maxW="container.xl" paddingX={[4, null, '6']}>
        <main>{children}</main>
      </Container>
    </>
  );
};

export default MainLayout;
