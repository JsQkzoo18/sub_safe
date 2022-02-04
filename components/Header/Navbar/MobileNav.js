import {
  Text,
  Button,
  Stack,
  useColorModeValue,
  MenuButton,
  MenuList,
  Menu,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { capitalize } from "lodash";
import { MobileNavItem } from "./MobileNavItem";

export const MobileNav = ({ NAV_ITEMS, auth, logout }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "black_s")}
      p={4}
      paddingTop={{ base: "30px", sm: "30px", md: "20px" }}
      display={{ md: "block" }}
    >
      {NAV_ITEMS.map((x) => (
        <MobileNavItem
          key={x.label}
          label={capitalize(x.label)}
          href={x.href}
          children={x.children ?? null}
        />
      ))}
      <Stack flex={{ base: 1, md: 0 }} direction={"column"} spacing={6}>
        {!auth ? (
          <>
            <NextLink href="/login" passHref>
              <Button
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
                display={{ base: "block", md: "inline-flex" }}
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
                display={{ base: "block", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"purpleDark"}
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
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              bg={"transparent"}
              _focus={{
                outline: "0",
              }}
              display={{ base: "flex", md: "none" }}
            >
              <Text>
                {`${auth.userData.first_name} ${auth.userData.last_name}`}
              </Text>
            </MenuButton>
            <MenuList>
              <MenuItem
                h="40px"
                onClick={logout}
                variant="ghost"
                w="full"
                h={"40px"}
                _hover={{
                  bg: useColorModeValue("primaryLight", "primaryDark"),
                  color: "white",
                }}
              >
                Cerrar Sesión
                <ArrowForwardIcon />
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Stack>
    </Stack>
  );
};
