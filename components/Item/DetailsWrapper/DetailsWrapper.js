import { Box, Text, useColorModeValue, List, ListItem } from "@chakra-ui/react";

export const DetailsWrapper = () => {
  return (
    <Box>
      <Text
        fontSize={{ base: "16px", lg: "18px" }}
        color={useColorModeValue("yellow.500", "yellow.300")}
        fontWeight={"500"}
        textTransform={"uppercase"}
        mb={"4"}
      >
        Product Details
      </Text>

      <List spacing={2}>
        <ListItem>
          <Text as={"span"} fontWeight={"bold"}>
            Detail:
          </Text>{" "}
          1
        </ListItem>
        <ListItem>
          <Text as={"span"} fontWeight={"bold"}>
            Detail:
          </Text>{" "}
          2
        </ListItem>
        <ListItem>
          <Text as={"span"} fontWeight={"bold"}>
            Detail:
          </Text>{" "}
          3
        </ListItem>
        <ListItem>
          <Text as={"span"} fontWeight={"bold"}>
            Detail:
          </Text>
          4
        </ListItem>
      </List>
    </Box>
  );
};
