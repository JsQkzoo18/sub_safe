import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  ScaleFade,
} from "@chakra-ui/react";

import NextLink from "next/link";

export default function Login() {
  return (
    <ScaleFade initialScale={0.9} in={true}>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "grayDark")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Inicia Sesión en tu cuenta</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              para disfrutar todas las{" "}
              <Link color={"#purpleDark"}>características</Link>
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "blueDark")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Correo electrónico</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="Ingresa tú email"
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Contraseña</FormLabel>
                <Input type="password" name="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <NextLink href="/register" passHref>
                    <Link color={"gray.400"}>No tienes una cuenta?</Link>
                  </NextLink>

                  <NextLink href="/forgot-password" passHref>
                    <Link color={"#5034C8"}>Olvidaste la contraseña?</Link>
                  </NextLink>
                </Stack>
                <Button
                  bg={"grayLight"}
                  color={"white"}
                  _hover={{
                    bg: "grayDark",
                  }}
                  type="submit"
                >
                  Iniciar Sesión
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </ScaleFade>
  );
}
