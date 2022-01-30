import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  Link,
  ScaleFade,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function ForgotPsw() {
  return (
    <ScaleFade initialScale={0.9} in={true}>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("silver_p", "black_p")}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "black_s")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Olvidaste tu contraseña?
          </Heading>
          <Text
            fontSize={{ base: "sm", sm: "md" }}
            color={useColorModeValue("gray.800", "gray.400")}
          >
            Recibirás un correo electrónico con un enlace de reinicio
          </Text>
          <FormControl id="email">
            <Input
              placeholder="tu-correo@gmail.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={useColorModeValue("silver_p", "black_p")}
              border={"1px"}
              borderColor={useColorModeValue("silver_p", "red")}
              color={useColorModeValue("black_p", "white")}
              _hover={{
                bg: useColorModeValue("primaryLight", "primaryDark"),
              }}
            >
              Solicitar reinicio
            </Button>
            <NextLink href="/login" passHref>
              <Link color={useColorModeValue("black_p", "white")}>
                Regresar a inicio de sesión
              </Link>
            </NextLink>
          </Stack>
        </Stack>
      </Flex>
    </ScaleFade>
  );
}
