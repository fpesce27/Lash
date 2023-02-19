'use client'
import { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FiFilter } from "react-icons/fi";
import { AddIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";

interface Props {
  filters: { title: string; options: string[] }[];
  onChange: (filters: { [key: string]: string[] }) => void;
}

const FiltersDrawer: React.FC<Props> = ({ filters, onChange }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({});

  const handleFilterChange = (filterTitle: string, filterValue: string) => {
    setSelectedFilters((prevSelectedFilters) => {
      const currentFilterValues = prevSelectedFilters[filterTitle] || [];
      const newFilterValues = currentFilterValues.includes(filterValue)
        ? currentFilterValues.filter((value) => value !== filterValue)
        : [...currentFilterValues, filterValue];
      return { ...prevSelectedFilters, [filterTitle]: newFilterValues };
    });
  };

  const handleApplyFilters = () => {
    onChange(selectedFilters);
    onClose();
  };

  const handleClearFilters = () => {
    setSelectedFilters({});
  };

  return (
    <>
      <IconButton icon={<FiFilter />} aria-label="Filters" variant="ghost" onClick={onOpen} />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filters</DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" spacing="6">
              {filters?.map((filter) => (
                <VStack key={filter.title} align="stretch" spacing="2">
                  <Text fontWeight="bold">{filter.title}</Text>
                  {filter.options.map((option) => (
                    <Text
                      key={option}
                      cursor="pointer"
                      color={selectedFilters[filter.title]?.includes(option) ? "blue.500" : "gray.600"}
                      onClick={() => handleFilterChange(filter.title, option)}
                    >
                      {option}
                      {selectedFilters[filter.title]?.includes(option) && <CheckIcon ml="2" />}
                    </Text>
                  ))}
                </VStack>
              ))}
            </VStack>
          </DrawerBody>
          <DrawerHeader borderBottomWidth="1px" fontSize="sm">
            <Text cursor="pointer" color="blue.500" onClick={handleClearFilters}>
              Clear filters
            </Text>
            <IconButton
              icon={<AddIcon />}
              aria-label="Apply filters"
              variant="solid"
              colorScheme="blue"
              onClick={handleApplyFilters}
              isDisabled={Object.keys(selectedFilters).length === 0}
              ml="auto"
            />
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default FiltersDrawer;
