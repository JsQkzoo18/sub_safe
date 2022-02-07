import React, { useState } from "react";
import { Divider, Flex, Heading, Text } from "@chakra-ui/react";
import SimpleLayout from "../../layouts/SimpleLayout/SimpleLayout";
import SEO_C from "../../components/SEO_C";
import GridProduct from "../../components/GridProduct/GridProduct";
import { useAuth } from "../../hooks";
import {
  useGetActiveProductByUser,
  useGetInactiveProductByUser,
  useGetProductByUser,
} from "../../hooks/useProduct";
import { size } from "lodash";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Loader from "../../components/Loader";
import Router, { useRouter } from "next/router";
import AddProduct from "../../components/Products/AddProduct/AddProduct";

export default function UserProducts() {
  const { auth } = useAuth();
  const [reloadProducts, setReloadProducts] = useState(false);

  const { products, loading } = useGetProductByUser(
    auth?.token,
    reloadProducts,
    setReloadProducts
  );

  const { activeProducts, activeLoading } = useGetActiveProductByUser(
    auth?.token,
    reloadProducts,
    setReloadProducts
  );

  const { inactiveProducts, inactiveLoading } = useGetInactiveProductByUser(
    auth?.token,
    reloadProducts,
    setReloadProducts
  );

  const router = useRouter();

  if (loading) return <Loader />;
  if (!auth) router.push("/");

  return (
    <SimpleLayout>
      <SEO_C />
      <Flex justify={"space-between"} direction={{ base: "column", md: "row" }}>
        <BreadCrumb page={"Mis productos"} />
        <AddProduct setReloadProducts={setReloadProducts} />
      </Flex>

      {size(activeProducts) > 0 && (
        <>
          <Heading m={3}>Productos Activos</Heading>
          <GridProduct
            products={activeProducts}
            setReloadProducts={setReloadProducts}
          />
        </>
      )}

      {size(inactiveProducts) > 0 && (
        <>
          <Heading m={3}>Productos Inactivos</Heading>
          <GridProduct
            products={inactiveProducts}
            setReloadProducts={setReloadProducts}
            activeFooter
          />
        </>
      )}
    </SimpleLayout>
  );
}
