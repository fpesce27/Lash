import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { Item } from "@/pages/instances";

export default function ItemCard({item}: { item : Item }) {
  return (
    <Center py={12}>
      <Link
        _hover={{ transform: "translateY(-2px)", shadow: "lg"}}
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        href={{
            pathname: '/itemDetails',
            query: {
                name: item.name,
                description: item.description,
                priceArs: item.priceArs,
                priceUsd: item.priceUsd,
                image: item.image,
            }
        }}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${item.image})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={item.image}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Brand
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {item.name}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}> $ </Text>
            <Text fontSize={"xl"}>{item.priceArs}</Text>

            <Text color={"gray.500"}>
                <Text as={"span"} color={useColorModeValue("gray.600", "gray.200")}>
                    {" "}
                    /{" "}
                </Text>
                {item.priceUsd} USD
            </Text>
          </Stack>
        </Stack>
      </Link>
    </Center>
  );
}
