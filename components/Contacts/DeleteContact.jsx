import {
  IconButton,
  Icon,
  useDisclosure,
  Tooltip,
  useToast,
} from '@chakra-ui/react';
import { AiFillDelete } from 'react-icons/ai';

import { useAuthContext } from '@lib/contexts/auth.context';
import {
  getToastErrorOptions,
  getToastSuccessOptions,
} from '@lib/helpers/toast.helpers';
import { deleteContact } from '@services/firebase/firestore/contacts.action';
import { DeleteContactAlert } from '@components/Alerts';

const DeleteContact = ({ contactId }) => {
  const { user } = useAuthContext();
  const { onOpen, onClose, isOpen } = useDisclosure();
  const toast = useToast();

  const onDelete = async () => {
    try {
      await deleteContact(user.uid, contactId);

      toast(getToastSuccessOptions('Contact was deleted.'));
    } catch (error) {
      toast(getToastErrorOptions('Failed to delete the contact.'));
    }
  };

  return (
    <>
      <Tooltip label="Delete Contact" placement="bottom-start" hasArrow={true}>
        <IconButton
          aria-label="Delete"
          colorScheme="blackAlpha"
          variant="ghost"
          icon={<Icon as={AiFillDelete} color="gray.500" />}
          onClick={onOpen}
        />
      </Tooltip>

      <DeleteContactAlert
        isOpen={isOpen}
        onClose={onClose}
        onDelete={onDelete}
      />
    </>
  );
};

export default DeleteContact;
