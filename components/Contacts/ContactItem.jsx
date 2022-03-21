import {
  Avatar,
  Box,
  Icon,
  Flex,
  Text,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { AiFillDelete } from 'react-icons/ai';
import { DeleteContact } from '@components/Contacts';

const ContactItem = ({ id, fullName, address, phoneNumber }) => {
  return (
    <Box
      as="article"
      paddingX="2"
      paddingY="3"
      borderBottom="1px"
      rounded="sm"
      borderBottomColor="gray.200"
      bgColor="white"
      _notLast={{ borderBottomRadius: 'none' }}
      _last={{ borderTopRadius: 'none' }}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center" gap="4">
          <Avatar
            bg="gray.50"
            icon={<Icon as={HiOutlineBookOpen} fontSize="2xl" />}
          />

          <Stack spacing="1">
            <Heading as="h3" size="sm" fontWeight="semibold" color="black">
              {fullName}
            </Heading>

            <Box>
              <Text fontSize="sm">Address: {address} </Text>
              <Text fontSize="sm">Phone: {phoneNumber}</Text>
            </Box>
          </Stack>
        </Flex>

        <DeleteContact contactId={id} />
      </Flex>
    </Box>
  );
};

export default ContactItem;
