import React, { useState } from "react";
import { Center, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import SimpleLayout from "../../layouts/SimpleLayout/SimpleLayout";
import SEO_C from "../../components/SEO_C";
import GridProduct from "../../components/GridProduct/GridProduct";
import { useAuth } from "../../hooks";
import { useGetPurchasedProductsByUser } from "../../hooks/useProduct";
import { size } from "lodash";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Loader from "../../components/Loader";
import Router, { useRouter } from "next/router";

export default function UserShopping() {
  const { auth } = useAuth();

  const { purchasedProducts, purchasedLoading } = useGetPurchasedProductsByUser(
    auth?.token
  );

  const router = useRouter();

  if (purchasedLoading) return <Loader />;
  if (!auth) router.push("/");

  return (
    <SimpleLayout>
      <SEO_C />
      <Flex justify={"space-between"} direction={{ base: "column", md: "row" }}>
        <BreadCrumb page={"Mis compras"} />
      </Flex>
      {size(purchasedProducts) === 0 && (
        <Center mt={10}>
          <Heading>Aún no tienes productos creados</Heading>
        </Center>
      )}
      {size(purchasedProducts) > 0 && (
        <>
          <Heading my={3}>Productos Adquiridos</Heading>
          <GridProduct products={purchasedProducts} />
        </>
      )}
    </SimpleLayout>
  );
}
