import { Container, SimpleGrid } from "@chakra-ui/react";
import { ImageWrapper } from "../components/Item/ImageWrapper/ImageWrapper";
import SimpleLayout from "../layouts/SimpleLayout";
import TabProduct from "../components/Tab/TabProduct";
import SEO_C from "../components/SEO_C";

export default function Product() {
  return (
    <SimpleLayout>
      <SEO_C title="Ositos Cariñosos" />
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
