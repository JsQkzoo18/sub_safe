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
        Features
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <List spacing={2}>
          <ListItem>Product Feature 1 </ListItem>
          <ListItem>Product Feature 2</ListItem>
          <ListItem>Product Feature 3</ListItem>
        </List>
      </SimpleGrid>
    </Box>
  );
};
