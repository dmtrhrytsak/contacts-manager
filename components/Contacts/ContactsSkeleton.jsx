import {
  Stack,
  Box,
  SkeletonCircle,
  SkeletonText,
  Heading,
} from '@chakra-ui/react';

const ContactsSkeleton = () => {
  return (
    <Stack textColor="gray.600">
      <Heading as="h2" size="sm" fontWeight="normal" marginBottom="5">
        My Contacts
      </Heading>

      <Box as="article" paddingX="2" paddingY="3" rounded="sm" bgColor="white">
        <SkeletonCircle size="9" />

        <SkeletonText noOfLines={3} spacing="4" mt="4" />
      </Box>
      <Box as="article" paddingX="2" paddingY="3" rounded="sm" bgColor="white">
        <SkeletonCircle size="9" />

        <SkeletonText noOfLines={3} spacing="4" mt="4" />
      </Box>
    </Stack>
  );
};

export default ContactsSkeleton;
