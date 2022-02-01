import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
  MenuButton,
  MenuList,
  Menu,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";

import NextLink from "next/link";
import ThemeToggleButton from "../../Theme/ThemeToggleButton";
import SearchButton from "../SearchButton/SearchButton";
import { useGetCategories } from "../../../hooks/useCategories";
import { capitalize } from "lodash";
import { colorModeSchema } from "../../../utils/colorMode";

export default function Navbar({ auth, logout }) {
  const { isOpen, onToggle } = useDisclosure();
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

const DesktopNav = ({ NAV_ITEMS }) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} cursor={"pointer"}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                fontSize={"sm"}
                fontWeight={500}
                href={navItem.href ?? "#"}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
                _focus={{
                  textDecoration: "none",
                  outline: "none",
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((x) => (
                    <DesktopSubNav
                      key={x.id}
                      label={capitalize(x.name)}
                      href={`/category/${x.id}`}
                    />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href }) => {
  return (
    <NextLink href={href} passHref>
      <Link
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        w={"full"}
        _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "pink.400" }}
              fontWeight={500}
            >
              {label}
            </Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    </NextLink>
  );
};

const MobileNav = ({ NAV_ITEMS, auth, logout }) => {
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

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.id} py={2} href={`/category/${child.id}`}>
                {capitalize(child.name)}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const LoginMenu = ({ user, logout }) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        colorScheme={colorModeSchema()}
        variant={"ghost"}
        _focus={{
          outline: "0",
        }}
        display={{ base: "none", md: "flex" }}
      >
        <Text>{user}</Text>
      </MenuButton>
      <MenuList>
        <MenuItem _hover={{ bg: "transparent" }}>
          <DesktopSubNav label={"Mis productos"} href={"/user/my-products"} />
        </MenuItem>

        <MenuItem _hover={{ bg: "transparent" }}>
          <DesktopSubNav label={"Mis compras"} href={"/user/my-shopping"} />
        </MenuItem>

        <MenuDivider color={colorModeSchema()} />

        <MenuItem display={{ base: "block", md: "none" }}>
          <Text>{user}</Text>
        </MenuItem>
        <MenuItem _hover={{ bg: "transparent" }}>
          <SubMenu label={"Cerrar Sesión"} logout={logout} />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

const RigtMenuItems = ({ auth, logout }) => {
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

const SubMenu = ({ label, logout }) => {
  return (
    <Link
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      w={"full"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
      onClick={logout}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};
