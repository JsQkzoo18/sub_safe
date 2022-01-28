import { Text, VStack, useColorModeValue } from "@chakra-ui/react";

export const DescriptionWrapper = ({
  description = "Su constante sonrisa y su insignia en su barriguita son muestras de como transmite la alegría.",
}) => (
  <VStack spacing={{ base: 4, sm: 6 }}>
    <Text
      color={useColorModeValue("gray.500", "gray.100")}
      fontSize={"2xl"}
      fontWeight={"350"}
    >
      {description}
    </Text>
  </VStack>
);
