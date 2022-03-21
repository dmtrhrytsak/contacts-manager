import {
  Box,
  Text,
  Flex,
  Container,
  Icon,
  IconButton,
  Tooltip,
  HStack,
} from '@chakra-ui/react';
import { AddContactPopover } from '@components/Contacts';
import { BsPlusSquare } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';

const Navigation = ({ onLogOff }) => {
  return (
    <Box
      as="nav"
      paddingY="2"
      borderBottom="1px"
      borderColor="gray.200"
      backgroundColor="white"
    >
      <Container maxW="container.xl" paddingX={[4, null, '6']}>
        <Flex alignItems="center" justifyContent="space-between">
          <Box fontSize="2xl" cursor="default">
            Contacts
          </Box>

          <Flex spacing="3" gap="3">
            <AddContactPopover />

            <Tooltip label="logout" hasArrow>
              <IconButton
                arial-label="Log out"
                icon={<Icon as={FiLogOut} fontSize="md" />}
                size="sm"
                variant="outline"
                onClick={onLogOff}
              />
            </Tooltip>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navigation;
