import {
  collection,
  doc,
  addDoc,
  deleteDoc,
  serverTimestamp,
} from 'firebase/firestore';

import { db } from '@services/firebase/firebase.config';

export const createContact = async (uid, contactData) => {
  const contactsSubCollectionRef = collection(db, 'users', uid, 'contacts');

  await addDoc(contactsSubCollectionRef, {
    ...contactData,
    createdAt: serverTimestamp(),
  });
};

export const deleteContact = async (uid, contactId) => {
  const contactDoc = doc(db, 'users', uid, 'contacts', contactId);

  await deleteDoc(contactDoc);
};
