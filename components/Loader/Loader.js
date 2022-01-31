import { Flex, Spinner, Text, useColorModeValue } from "@chakra-ui/react";
import SimpleLayout from "../../layouts/SimpleLayout";

export default function Loader({ loadingText = "Cargando" }) {
  return (
    <SimpleLayout>
      <Flex
        justifyContent={"center"}
        h={"80vh"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Spinner
          label="Cargando"
          size="xl"
          thickness="5px"
          speed="0.85s"
          emptyColor="gray.500"
          color={useColorModeValue("primaryLight", "primaryDark")}
        />
        <Text
          mt={5}
          color={useColorModeValue("primaryLight", "primaryDark")}
          fontSize={20}
          fontWeight={"500"}
        >
          {loadingText}
        </Text>
      </Flex>
    </SimpleLayout>
  );
}
