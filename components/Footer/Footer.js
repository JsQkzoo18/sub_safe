import {
  Box,
  chakra,
  Container,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { EmailIcon, ChevronUpIcon } from "@chakra-ui/icons";

const Logo = (props) => {
  return (
    <Image
      boxSize="40px"
      src="/tag.png"
      alt="Logo"
      mr={5}
      display={{ base: "none", md: "block" }}
    />
  );
};

const FooterButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "black_s")}
      color={useColorModeValue("gray.700", "gray.200")}
      pos={{ base: "absolute" }}
      left={0}
      w={"full"}
      h={{ base: "100px", md: "70px" }}
      mt={{ base: 5 }}
      zIndex={100}
    >
      <Container
        as={Stack}
        maxW={"full"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={2}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo />
        <Text>© 2022 SubaSafe. Todos los derechos reservados</Text>
        <Stack direction={"row"} spacing={6}>
          <FooterButton label={"Mail"} href={"#"}>
            <EmailIcon />
          </FooterButton>
          <FooterButton label={"Go top"} href={"#"}>
            <ChevronUpIcon />
          </FooterButton>
        </Stack>
      </Container>
    </Box>
  );
}
