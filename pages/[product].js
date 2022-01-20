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
import TabProduct from "../components/Tab/TabProduct";

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
          <TabProduct />
        </SimpleGrid>
      </Container>
    </SimpleLayout>
  );
}
