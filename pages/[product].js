import { Container, SimpleGrid, Text } from "@chakra-ui/react";
import { ImageWrapper } from "../components/Item/ImageWrapper/ImageWrapper";
import SimpleLayout from "../layouts/SimpleLayout";
import TabProduct from "../components/Tab/TabProduct";
import SEO_C from "../components/SEO_C";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const MotionSimpleGrid = motion(SimpleGrid);

export default function ProductX() {
  // const { query } = useRouter();
  // console.log(query);
  const quey = "asfsfsdfds";

  return (
    <SimpleLayout>
      <SEO_C title="Ositos Cariñosos" />
      <Container maxW={"7xl"}>
        <MotionSimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          pt={{ base: 15, md: 20 }}
        >
          <Text pos={"relative"} zIndex={989}>
            HOla
          </Text>

          <ImageWrapper />
          <TabProduct />
        </MotionSimpleGrid>
      </Container>
    </SimpleLayout>
  );
}
