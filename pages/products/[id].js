import { Container, SimpleGrid } from "@chakra-ui/react";
import { ImageWrapper } from "../../components/Item/ImageWrapper/ImageWrapper";
import SEO_C from "../../components/SEO_C";
import TabProduct from "../../components/Tab/TabProduct";
import SimpleLayout from "../../layouts/SimpleLayout";
import { motion } from "framer-motion";
import Carousel from "../../components/Carousel/Carousel";
import { useRouter } from "next/router";

// These are the images used in the slide
const cards = [
  "https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  "https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  "https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
];

export default function Product() {
  const { query } = useRouter();

  console.log(query.id);

  return (
    <SimpleLayout>
      <SEO_C title="Ositos Cariñosos" />
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        m={0}
        p={0}
      >
        <Carousel images={cards} />
        <TabProduct />
      </SimpleGrid>
    </SimpleLayout>
  );
}
