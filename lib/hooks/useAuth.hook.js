import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  getAdditionalUserInfo,
} from 'firebase/auth';
import { useToast } from '@chakra-ui/react';

import { auth } from '@services/firebase/firebase.config';
import { formatUser } from '@lib/helpers/user.helpers';
import { getToastErrorOptions } from '@lib/helpers/toast.helpers';
import { createUser } from '@services/firebase/firestore/users.actions';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const toast = useToast();

  const handleUser = (rawUser) => {
    setIsInitialized(false);

    if (rawUser) {
      const user = formatUser(rawUser);

      setUser(user);
    } else {
      setUser(null);
    }

    setIsInitialized(true);
  };

  const createUserWithCredentials = async ({ email, password }) => {
    try {
      setIsLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = formatUser(userCredential.user);
      const { isNewUser } = getAdditionalUserInfo(userCredential);

      if (isNewUser) {
        createUser(user);
      }

      router.push('/');
    } catch (error) {
      toast(getToastErrorOptions(error.message));
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithCredentials = async ({ email, password }) => {
    try {
      setIsLoading(true);

      await signInWithEmailAndPassword(auth, email, password);

      router.push('/');
    } catch (error) {
      toast(getToastErrorOptions(error.message));
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(
        auth,
        new GoogleAuthProvider()
      );

      const user = formatUser(userCredential.user);
      const { isNewUser } = getAdditionalUserInfo(userCredential);

      if (isNewUser) {
        createUser(user);
      }

      router.push('/');
    } catch (error) {
      toast(getToastErrorOptions(error.message));
    }
  };

  const logOff = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      toast(getToastErrorOptions(error.message));
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, handleUser);

    return unsubscribe;
  }, []);

  return {
    user,
    isInitialized,
    isLoading,
    signInWithCredentials,
    createUserWithCredentials,
    signInWithGoogle,
    logOff,
  };
};
