import {
  Box,
  Text,
  SimpleGrid,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";

export const FeaturesWrapper = () => {
  return (
    <Box>
      <Text
        fontSize={{ base: "16px", lg: "18px" }}
        color={useColorModeValue("yellow.500", "yellow.300")}
        fontWeight={"500"}
        textTransform={"uppercase"}
        mb={"4"}
      >
        Características
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <List spacing={2}>
          <ListItem>Suaves</ListItem>
          <ListItem>Tiernositos</ListItem>
          <ListItem>Maravillositos</ListItem>
        </List>
      </SimpleGrid>
    </Box>
  );
};
