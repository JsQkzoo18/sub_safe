import {
  Box,
  Text,
  SimpleGrid,
  useColorModeValue,
  List,
  ListItem,
  Divider,
} from "@chakra-ui/react";

export const FeaturesWrapper = () => {
  return (
    <Box>
      <Text
        fontSize={{ base: "16px", lg: "18px" }}
        color={useColorModeValue("purpleDark", "yellow.300")}
        fontWeight={"500"}
        textTransform={"uppercase"}
        mb={"4"}
      >
        Características
      </Text>

      <SimpleGrid columns={1} spacing={10}>
        <List spacing={2}>
          <ListItem>Suaves</ListItem>
          <ListItem>Tiernositos</ListItem>
          <ListItem>Maravillositos</ListItem>
        </List>
      </SimpleGrid>
    </Box>
  );
};
