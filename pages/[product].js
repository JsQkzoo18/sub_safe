import {
  Container,
  Stack,
  Button,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import { DescriptionWrapper } from "../components/Item/DescriptionWrapper/DescriptionWrapper";
import { DetailsWrapper } from "../components/Item/DetailsWrapper/DetailsWrapper";
import { FeaturesWrapper } from "../components/Item/FeaturesWrapper/FeaturesWrapper";
import { HeaderWrapper } from "../components/Item/HeaderWrapper/HeaderWrapper";
import { ImageWrapper } from "../components/Item/ImageWrapper/ImageWrapper";
import { MoreDetailsWrapper } from "../components/Item/MoreDetailsWrapper/MoreDetailsWrapper";
import SimpleLayout from "../layouts/SimpleLayout";

export default function Product() {
  return (
    <SimpleLayout>
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          pt={{ base: 15, md: 20 }}
        >
          <ImageWrapper />
          <Stack spacing={{ base: 6, md: 10 }}>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <HeaderWrapper />
              <DescriptionWrapper />
              <FeaturesWrapper />
              <DetailsWrapper />
            </Stack>
          </Stack>
          <MoreDetailsWrapper />

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Buy
          </Button>
        </SimpleGrid>
      </Container>
    </SimpleLayout>
  );
}
