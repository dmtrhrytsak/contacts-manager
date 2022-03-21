import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import AuthProvider from '@lib/contexts/auth.context';
import { WithAuth } from '@components/Routes';
import { MainLayout } from '@components/Layouts';

const styles = {
  global: () => ({
    body: {
      bg: 'gray.50',
    },
  }),
};

const theme = extendTheme({
  styles,
});

const protectedRoutes = ['/'];

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <AuthProvider>
        <WithAuth protectedRoutes={protectedRoutes}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </WithAuth>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
