import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

type SearchInputProps = {
    // user:
};

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <Flex>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input placeholder="Search Reddit" fontSize="" />
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;
