import { Center, Code, Container, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { useGetCategories } from "../hooks/useCategories";
import { useGetProducts } from "../hooks/useProduct";

export default function hooks_tst() {
  const { products } = useGetProducts();
  const { categories } = useGetCategories();

  return (
    <Container maxW="container.xl">
      <Center>
        <Heading>Prueba de Hooks - API</Heading>
      </Center>

      <Stack>
        <Heading>Products</Heading>
        {products && (
          <Code colorScheme={"green"}>
            <pre>{JSON.stringify(products, null, 2)}</pre>
          </Code>
        )}
      </Stack>

      <Stack>
        <Heading>Categories</Heading>
        {categories && (
          <Code colorScheme={"orange"}>
            <pre>{JSON.stringify(categories, null, 2)}</pre>
          </Code>
        )}
      </Stack>
    </Container>
  );
}
