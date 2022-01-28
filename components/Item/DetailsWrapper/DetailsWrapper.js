import { Box, Text, useColorModeValue, List, ListItem } from "@chakra-ui/react";

export const DetailsWrapper = ({ owner = "Flavio", date = "2022/02/01" }) => {
  return (
    <Box>
      <Text
        fontSize={{ base: "16px", lg: "18px" }}
        color={useColorModeValue("purpleDark", "yellow.300")}
        fontWeight={"500"}
        textTransform={"uppercase"}
        mb={"4"}
      >
        Detalles
      </Text>

      <List spacing={2}>
        <ListItem
          borderLeft={"3px solid"}
          borderColor={useColorModeValue("purpleDark", "white")}
          rounded={"sm"}
          mb={5}
        >
          <Text
            as={"span"}
            fontWeight={"bold"}
            fontSize={"lg"}
            color={useColorModeValue("gray.600", "gray.100")}
            ml={2}
          >
            Propietario:
          </Text>
          <Text as={"span"} fontWeight={"350"} ml={2} fontSize={"lg"}>
            {owner}
          </Text>
        </ListItem>
        <ListItem
          borderLeft={"3px solid"}
          borderColor={useColorModeValue("purpleDark", "white")}
          rounded={"sm"}
        >
          <Text
            as={"span"}
            fontWeight={"bold"}
            fontSize={"lg"}
            color={useColorModeValue("gray.600", "gray.100")}
            ml={2}
          >
            Fecha de publicación:
          </Text>

          <Text as={"span"} fontWeight={"400"} ml={2} fontSize={"lg"}>
            {date}
          </Text>
        </ListItem>
      </List>
    </Box>
  );
};
