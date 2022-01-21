import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Slide,
  SlideFade,
} from "@chakra-ui/react";
import Link from "next/link";

const IMAGE = "/toy.jpg";

export default function SimpleProduct({ title, price, url }) {
  return (
    <Link href={`/${url}`}>
      <div className="simple-product">
        <Center cursor={"pointer"}>
          <SlideFade in={true} offsetY="20px">
            <Box
              role={"group"}
              p={3}
              mt={2}
              mb={2}
              maxW={"330px"}
              w={"full"}
              bg={useColorModeValue("white", "grayDark")}
              boxShadow={"2xl"}
              rounded={"lg"}
              pos={"relative"}
              zIndex={1}
            >
              <Box
                rounded={"lg"}
                pos={"relative"}
                height={"230px"}
                _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  top: 2,
                  left: 0,
                  backgroundImage: `url(${IMAGE})`,
                  filter: "blur(5px)",
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: "blur(10px)",
                  },
                }}
              >
                <Image
                  rounded={"lg"}
                  height={230}
                  width={282}
                  objectFit={"cover"}
                  src={IMAGE}
                />
              </Box>
              <Stack pt={10} align={"center"}>
                <Text
                  color={"gray.500"}
                  fontSize={"sm"}
                  textTransform={"uppercase"}
                >
                  Articulo
                </Text>
                <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                  Descripción
                </Heading>

                <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={500}>
                  $200
                </Heading>

                <Stack direction={"row"} align={"center"}>
                  <Text fontWeight={300} fontSize={"sm"}>
                    23/01/2022
                  </Text>
                  <Text textDecoration={"line-through"} color={"gray.600"}>
                    {price}
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </SlideFade>
        </Center>
      </div>
    </Link>
  );
}
