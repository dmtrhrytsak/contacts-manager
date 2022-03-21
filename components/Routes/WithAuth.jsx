import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Spinner } from '@chakra-ui/react';

import { useAuthContext } from '@lib/contexts/auth.context';

const WithAuth = ({ protectedRoutes, children }) => {
  const { isInitialized, isAuthenticated } = useAuthContext();

  const router = useRouter();
  const isProtectedPath = protectedRoutes.includes(router.pathname);

  useEffect(() => {
    if (isProtectedPath && isInitialized && !isAuthenticated) {
      router.push('/login');
    }
  }, [router, isInitialized, isAuthenticated, isProtectedPath]);

  if (isProtectedPath && (!isInitialized || !isAuthenticated)) {
    return (
      <Spinner
        emptyColor="gray.200"
        color="teal"
        position="fixed"
        top="50%"
        left="50%"
        translateX="-500%"
        translateY="-50%"
        size="lg"
      />
    );
  }

  return children;
};

export default WithAuth;
