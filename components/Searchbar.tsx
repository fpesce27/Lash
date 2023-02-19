import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ChangeEvent } from "react";

interface Props {
  placeholder?: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ placeholder = "Search", onChange }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <InputGroup maxW="500px">
      <InputLeftElement pointerEvents="none" children={<SearchIcon />} color="gray.300" />
      <Input
        type="text"
        placeholder={placeholder}
        onChange={handleInputChange}
        bg="white"
        borderColor="gray.200"
        _hover={{ borderColor: "gray.300" }}
        _focus={{ boxShadow: "none", borderColor: "gray.300" }}
        borderRadius="full"
      />
    </InputGroup>
  );
};

export default SearchBar;
