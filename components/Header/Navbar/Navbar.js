import {
  Box,
  Flex,
  Text,
  IconButton,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Image,
  MenuGroup,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import NextLink from "next/link";
import { useGetCategories } from "../../../hooks/useCategories";
import { useAuth } from "../../../hooks";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { RigtMenuItems } from "./RigtMenuItems";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { auth, logout } = useAuth();

  const { categories } = useGetCategories();

  const NAV_ITEMS = [
    {
      label: "Todos los productos",
      href: "/",
    },
    {
      label: "Categorias",
      children: categories,
    },
    {
      label: "Acerca de nosotros",
      href: "#",
    },
  ];

  return (
    <Box>
      <Flex
        as={"header"}
        bg={useColorModeValue("white", "black_s")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        boxShadow={"sm"}
        borderBottom={"1px"}
        borderColor={useColorModeValue("gray.200", "black_t")}
        align={"center"}
        justify={"center"}
        pos="fixed"
        top="0"
        zIndex={999}
        w={"full"}
        css={{
          backdropFilter: "saturate(180%) blur(5px)",
        }}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          align="center"
        >
          <Image
            boxSize="40px"
            src="/tag.png"
            alt="Logo"
            cursor="pointer"
            mr={5}
            display={{
              base: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
            }}
          />
          <NextLink href="/" passHref>
            <Text
              textAlign={{ base: "center", md: "left" }}
              fontWeight={"bold"}
              color={useColorModeValue("gray.800", "white")}
              cursor="pointer"
            >
              SubaSafe
            </Text>
          </NextLink>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav categories={categories} NAV_ITEMS={NAV_ITEMS} />
          </Flex>
        </Flex>

        <RigtMenuItems auth={auth} logout={logout} />
      </Flex>

      <Box
        display={{ base: "block", sm: "block", md: "block", lg: "none" }}
        pt={{ base: "50px", sm: "50px", md: 0, lg: 0 }}
      >
        <Collapse in={isOpen} animateOpacity>
          <MobileNav NAV_ITEMS={NAV_ITEMS} auth={auth} logout={logout} />
        </Collapse>
      </Box>
    </Box>
  );
}
