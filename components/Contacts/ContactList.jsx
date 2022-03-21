import { Box } from '@chakra-ui/react';
import ContactItem from './ContactItem';

const ContactList = ({ contacts }) => {
  return (
    <Box>
      {contacts.map(({ id, fullName, address, phoneNumber }) => (
        <ContactItem
          key={id}
          id={id}
          fullName={fullName}
          address={address}
          phoneNumber={phoneNumber}
        />
      ))}
    </Box>
  );
};

export default ContactList;
