import { createContext, useContext } from 'react';

import { useAuth } from '@lib/hooks/useAuth.hook';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = useAuth();

  return (
    <AuthContext.Provider value={{ ...auth, isAuthenticated: !!auth.user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("Context can't be used outside of the provider.");
  }

  return useContext(AuthContext);
};

export default AuthProvider;
