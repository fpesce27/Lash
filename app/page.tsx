'use client'
import { Box, Container, Flex, Heading, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import SearchBar from "@/components/Searchbar";
import FiltersDrawer from "@/components/FiltersDrawer";
import ItemsList from "./ItemsList";

export default function Home() {
  const filters = [
    {
      title: "Category",
      options: ["Electronics", "Books", "Clothing", "Beauty", "Home & Kitchen"],
    },
    {
      title: "Price",
      options: ["Under $25", "$25 to $50", "$50 to $100", "Over $100"],
    },
    {
      title: "Brand",
      options: ["Apple", "Samsung", "Nike", "Adidas", "Lululemon", "Chanel", "Gucci"],
    },
  ];

  const handleFilterChange = (selectedFilters: { [key: string]: string[] }) => {
    // do something with the selected filters
    console.log(selectedFilters);
  };

  const handleSearch = (query: string) => {
    // do something with the search query
    console.log(query);
  };

  return (
    <Box p="6">
      <Container maxW="container.lg">
        <Flex mb="6" justify="space-between" align="center">
          <SearchBar placeholder="Search products" onChange={handleSearch} />
          <Box cursor="pointer" color="gray.600" _hover={{ color: "gray.800" }}>
          <FiltersDrawer filters={filters} onChange={handleFilterChange} />
          </Box>
        </Flex>
        <Flex>
          <SimpleGrid columns={[1, 2, 3]} spacing="6">
            <ItemsList />
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
}
