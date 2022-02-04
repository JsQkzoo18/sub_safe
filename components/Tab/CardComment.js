import {
  Stack,
  useColorModeValue,
  Center,
  Text,
  Box,
  Heading,
} from "@chakra-ui/react";

export const CardComment = ({ user, title, description }) => (
  <Center>
    <Box
      maxW={"500px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      rounded={"md"}
      overflow={"hidden"}
      m={0}
      p={0}
    >
      <Stack>
        <Text
          color={useColorModeValue("primaryLight", "primaryDark")}
          textTransform={"uppercase"}
          fontWeight={800}
          fontSize={"sm"}
          letterSpacing={1.1}
        >
          {user}
        </Text>
        <Heading
          color={useColorModeValue("gray.700", "white")}
          fontSize={"2xl"}
          fontFamily={"body"}
        >
          {title}
        </Heading>
        <Text color={"gray.500"}>{description}</Text>
      </Stack>
    </Box>
  </Center>
);
