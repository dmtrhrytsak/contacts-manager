import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { Box, Heading, Text } from '@chakra-ui/react';

import { db } from '@services/firebase/firebase.config';
import { useAuthContext } from '@lib/contexts/auth.context';
import { ContactList, ContactsSkeleton } from '@components/Contacts';
import { Search } from '@components/Utils';

const Contacts = () => {
  const [contacts, setContacts] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { user } = useAuthContext();

  const filteredContacts = contacts?.filter(({ fullName }) =>
    fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const contactsSubCollectionRef = collection(
      db,
      'users',
      user.uid,
      'contacts'
    );

    const unsubscribe = onSnapshot(contactsSubCollectionRef, (snapshot) => {
      const contacts = snapshot.docs.map((contactDoc) => ({
        id: contactDoc.id,
        ...contactDoc.data(),
      }));

      setContacts(contacts);
    });

    return unsubscribe;
  }, [user]);

  if (!contacts) {
    return <ContactsSkeleton />;
  }

  return (
    <Box as="section" paddingY="4" textColor="gray.600">
      <Heading as="h2" size="sm" fontWeight="normal" marginBottom="5">
        My Contacts
      </Heading>

      <Search marginBottom="6" onChange={handleSearchQueryChange} />

      {!filteredContacts.length ? (
        <Text>No contacts...</Text>
      ) : (
        <ContactList contacts={filteredContacts} />
      )}
    </Box>
  );
};

export default Contacts;
