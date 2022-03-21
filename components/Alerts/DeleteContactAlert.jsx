import { useRef } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';

const DeleteContactAlert = ({ isOpen, onClose, onDelete }) => {
  const cancelRef = useRef();

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered={true}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader>Delete Contact</AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can&apos;t undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <ButtonGroup spacing="2">
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>

              <Button colorScheme="red" onClick={onDelete}>
                Delete
              </Button>
            </ButtonGroup>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default DeleteContactAlert;
