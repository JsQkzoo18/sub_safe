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
  WrapItem,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";

import NextLink from "next/link";
import ThemeToggleButton from "../../Theme/ThemeToggleButton";
import SearchButton from "../SearchButton/SearchButton";
import { useGetCategories } from "../../../hooks/useCategories";
import { capitalize } from "lodash";

export default function Navbar(props) {
  const { isOpen, onToggle } = useDisclosure();
  const { path } = props;
  const { categories } = useGetCategories();

  const isLogin = true;

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
    <Box {...props}>
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
            >
              SubaSafe
            </Text>
          </NextLink>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav categories={categories} NAV_ITEMS={NAV_ITEMS} />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
          alignItems={"center"}
        >
          <SearchButton />

          {!isLogin ? (
            <>
              <Button
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
                display={{ base: "none", md: "inline-flex" }}
                _focus={{
                  textDecoration: "none",
                  outline: "none",
                }}
              >
                <NextLink href="/login" passHref>
                  <Link>Iniciar Sesión</Link>
                </NextLink>
              </Button>
              <Button
                display={{ base: "none", md: "inline-flex" }}
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
                <NextLink href="/register" passHref>
                  Registrarse
                </NextLink>
              </Button>
            </>
          ) : (
            <Text>John Silva</Text>
          )}
          <ThemeToggleButton />
        </Stack>
      </Flex>

      <Box
        display={{ base: "block", sm: "block", md: "block", lg: "none" }}
        pt={{ base: "50px", sm: "50px", md: 0, lg: 0 }}
      >
        <Collapse in={isOpen} animateOpacity>
          <MobileNav NAV_ITEMS={NAV_ITEMS} />
        </Collapse>
      </Box>
    </Box>
  );
}

const DesktopNav = ({ categories, NAV_ITEMS }) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
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

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <NextLink href={href} passHref>
      <Link
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
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
            <Text fontSize={"sm"}>{subLabel}</Text>
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

const MobileNav = ({ NAV_ITEMS }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "black_s")}
      p={4}
      paddingTop={{ base: "30px", sm: "30px", md: "20px" }}
      display={{ md: "block" }}
      className="loflsdfsd"
    >
      {NAV_ITEMS.map((x) => (
        <MobileNavItem
          key={x.label}
          label={capitalize(x.label)}
          href={x.href}
          children={x.children ?? null}
        />
      ))}
      <Stack flex={{ base: 1, md: 0 }} direction={"row"} spacing={6}>
        <WrapItem>
          <IconButton aria-label="Search database" icon={<SearchIcon />} />
        </WrapItem>

        <Button fontSize={"sm"} fontWeight={400} variant={"link"} href={"#"}>
          <NextLink href="/login" passHref>
            <Link>Iniciar Sesión</Link>
          </NextLink>
        </Button>
        <Button
          display={{ base: "none", md: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"purpleDark"}
          _hover={{
            bg: "grayLight",
          }}
        >
          <NextLink href="/register" passHref>
            Registrarse
          </NextLink>
        </Button>
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
