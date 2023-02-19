"use client";
import { Item } from "@/pages/instances";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import { useSearchParams } from "next/navigation";
import { Link } from "@chakra-ui/next-js";

export default function ItemDetails() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name")!;
  const description = searchParams.get("description")!;
  const priceArs = searchParams.get("priceArs")!;
  const priceUsd = searchParams.get("priceUsd")!;
  const image = searchParams.get("image")!;

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 12 }}
      >
        <ShowImage image={image} />

        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <ShowTitle name={name} />
            <ShowPrice priceArs={priceArs} priceUsd={priceUsd} />
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <ShowDescription description={description} />
          </Stack>

          <Stack pt={52}>
            <Button
              rounded={"md"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            >
              Add to cart
            </Button>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

const ShowImage = ({ image }: { image: string }) => {
  return (
    <Flex>
      <Image
        rounded={"md"}
        alt={"product image"}
        src={image}
        fit={"cover"}
        align={"center"}
        w={"100%"}
        h={{ base: "100%", sm: "400px", lg: "500px" }}
      />
    </Flex>
  );
};

function ShowTitle({ name }: { name: string }) {
  return (
    <Heading
      lineHeight={1.1}
      fontWeight={600}
      fontSize={{
        base: "2xl",
        sm: "4xl",
        lg: "5xl",
      }}
    >
      {name}
    </Heading>
  );
}

function ShowPrice({
  priceArs,
  priceUsd,
}: {
  priceArs: string;
  priceUsd: string;
}) {
  return (
    <Stack direction={"row"} align={"center"}>
      <Text
        color={useColorModeValue("gray.900", "gray.400")}
        fontWeight={300}
        fontSize={"2xl"}
      >
        {" "}
        ${" "}
      </Text>
      <Text
        color={useColorModeValue("gray.900", "gray.400")}
        fontWeight={300}
        fontSize={"2xl"}
      >
        {priceArs}
      </Text>

      <Text
        color={useColorModeValue("gray.900", "gray.400")}
        fontWeight={300}
        fontSize={"2xl"}
      >
        <Text
          as={"span"}
          color={useColorModeValue("gray.900", "gray.400")}
          fontWeight={300}
          fontSize={"2xl"}
        >
          {" "}
          /{" "}
        </Text>
        {priceUsd} USD
      </Text>
    </Stack>
  );
}

function ShowDescription({ description }: { description: string }) {
  return (
    <VStack
      spacing={{
        base: 4,
        sm: 6,
      }}
      alignItems={"flex-start"}
    >
      <Text
        color={useColorModeValue("gray.500", "gray.400")}
        fontSize={"2xl"}
        fontWeight={"300"}
      >
        {description}
      </Text>
    </VStack>
  );
}
