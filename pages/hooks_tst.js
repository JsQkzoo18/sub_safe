import { Center, Code, Container, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import Carousel from "../components/Carousel/Carousel";
import CustomAutoCompleteInput from "../components/Forms/AutoComplete/CustomAutoCompleteInput";
import SuccessResult from "../components/Results/SuccessResult/SuccessResult";
import { useGetCategories } from "../hooks/useCategories";
import { useGetProducts } from "../hooks/useProduct";
import Loader from "../components/Loader";

export default function hooks_tst() {
  const { products } = useGetProducts();
  const { categories } = useGetCategories();

  return (
    <>
      <Loader />
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
