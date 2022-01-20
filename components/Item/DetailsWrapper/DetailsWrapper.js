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
        Detalles
      </Text>

      <List spacing={2}>
        <ListItem>
          <Text as={"span"} fontWeight={"bold"}>
            Color:
          </Text>{" "}
          1
        </ListItem>
        <ListItem>
          <Text as={"span"} fontWeight={"bold"}>
            Unidades:
          </Text>{" "}
          2
        </ListItem>
        <ListItem>
          <Text as={"span"} fontWeight={"bold"}>
            Peso:
          </Text>{" "}
          3
        </ListItem>
      </List>
    </Box>
  );
};
