import { doc, setDoc } from 'firebase/firestore';

import { db } from '@services/firebase/firebase.config';

export const createUser = async (userData) => {
  const userDocRef = doc(db, 'users', userData.uid);
  await setDoc(userDocRef, userData);
};
