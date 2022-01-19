import { Box, Text, Heading, useColorModeValue } from "@chakra-ui/react";

export const HeaderWrapper = () => {
  return (
    <Box as={"header"}>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
      >
        Product Title
      </Heading>
      <Text
        color={useColorModeValue("gray.900", "gray.400")}
        fontWeight={300}
        fontSize={"2xl"}
      >
        Prodcut Price- $126.00 USD
      </Text>
    </Box>
  );
};
