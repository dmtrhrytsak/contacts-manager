import {
  Popover,
  PopoverTrigger,
  Icon,
  Button,
  useDisclosure,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  useToast,
} from '@chakra-ui/react';
import { BsPlusSquare } from 'react-icons/bs';

import { useAuthContext } from '@lib/contexts/auth.context';
import { createContact } from '@services/firebase/firestore/contacts.action';
import { AddContactForm } from '@components/Contacts';
import {
  getToastErrorOptions,
  getToastSuccessOptions,
} from '@lib/helpers/toast.helpers';

const AddContactPopover = () => {
  const { user } = useAuthContext();
  const { onOpen, onClose, isOpen } = useDisclosure();
  const toast = useToast();

  const onContactAdd = async (contactData) => {
    try {
      await createContact(user.uid, contactData);

      toast(getToastSuccessOptions('Contact was successfully created.'));
    } catch (error) {
      toast(getToastErrorOptions('Failed to create a new contact.'));
    }
  };

  return (
    <Popover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      closeOnBlur={true}
      placement={'bottom-end'}
    >
      <PopoverTrigger>
        <Button
          size="sm"
          variant="outline"
          colorScheme="green"
          rightIcon={<Icon as={BsPlusSquare} fontSize="lg" />}
        >
          New contact
        </Button>
      </PopoverTrigger>

      <PopoverContent p="5" width={['280px', '400px']}>
        <PopoverArrow />
        <PopoverCloseButton />
        <AddContactForm onSubmit={onContactAdd} onCancel={onClose} />
      </PopoverContent>
    </Popover>
  );
};

export default AddContactPopover;
