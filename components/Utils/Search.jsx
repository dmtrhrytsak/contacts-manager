import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Tooltip,
} from '@chakra-ui/react';
import { ImSearch } from 'react-icons/im';

const Search = ({ onChange, ...props }) => {
  return (
    <InputGroup size="lg" {...props}>
      <Input
        backgroundColor="white"
        placeholder="John Smith"
        _focus={{ borderColor: 'gray.300' }}
        onChange={onChange}
      />

      <InputRightElement width="4rem">
        <Tooltip label="Search for contact" placement="bottom-end" hasArrow>
          <IconButton height="2rem" icon={<ImSearch />} />
        </Tooltip>
      </InputRightElement>
    </InputGroup>
  );
};

export default Search;
