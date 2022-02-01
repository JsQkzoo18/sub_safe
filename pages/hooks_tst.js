import {
  Center,
  Code,
  Container,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useGetCategories } from "../hooks/useCategories";
import { useGetProductByUser, useGetProducts } from "../hooks/useProduct";
import { useAuth } from "../hooks";
import { map, size } from "lodash";
import { getProductImages } from "../utils/extractImages";

export default function hooks_tst() {
  const { auth } = useAuth();
  const { products, loading } = useGetProductByUser(auth?.token);
  const { categories } = useGetCategories();

  if (loading) return "Cargando";

  return (
    <>
      {size(products) > 0 && (
        <Stack>
          <Heading>User Products</Heading>
          {map(products, (product, index) => (
            <Stack key={index}>
              <Text>{product.id}</Text>
              <Text>{product.name}</Text>
              <Image src={getProductImages(product)[index]} />
            </Stack>
          ))}
        </Stack>
      )}

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
    </>
  );
}
