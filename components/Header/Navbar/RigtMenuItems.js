import { Button, Stack, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import ThemeToggleButton from "../../Theme/ThemeToggleButton";
import SearchButton from "../SearchButton/SearchButton";
import { LoginMenu } from "./LoginMenu";

export const RigtMenuItems = ({ auth, logout }) => {
  return (
    <Stack
      flex={{ base: 1, md: 0 }}
      justify={"flex-end"}
      direction={"row"}
      spacing={6}
      alignItems={"center"}
    >
      <SearchButton />

      {!auth ? (
        <>
          <NextLink href="/login" passHref>
            <Button
              fontSize={"md"}
              fontWeight={500}
              variant={"ghost"}
              m={0}
              color={useColorModeValue("primaryLight", "primaryDark")}
              display={{ base: "none", md: "inline-flex" }}
              _focus={{
                textDecoration: "none",
                outline: "none",
              }}
            >
              Iniciar Sesión
            </Button>
          </NextLink>

          <NextLink href="/register" passHref>
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={useColorModeValue("primaryLight", "primaryDark")}
              _hover={{
                bg: "grayLight",
              }}
              _focus={{
                textDecoration: "none",
                outline: "none",
              }}
            >
              Registrarse
            </Button>
          </NextLink>
        </>
      ) : (
        <LoginMenu
          user={`${auth.userData.first_name} ${auth.userData.last_name}`}
          logout={logout}
        />
      )}
      <ThemeToggleButton />
    </Stack>
  );
};
