import React, { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import SimpleLayout from "../../layouts/SimpleLayout/SimpleLayout";
import SEO_C from "../../components/SEO_C";
import GridProduct from "../../components/GridProduct/GridProduct";
import { useAuth } from "../../hooks";
import { useGetProductByUser } from "../../hooks/useProduct";
import { size } from "lodash";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Loader from "../../components/Loader";
import Router, { useRouter } from "next/router";
import AddProduct from "../../components/AddProduct/AddProduct";

export default function UserProducts() {
  const { auth } = useAuth();
  const [reloadProducts, setReloadProducts] = useState(false);

  const { products, loading } = useGetProductByUser(
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
      {size(products) > 0 && <GridProduct products={products} />}
    </SimpleLayout>
  );
}
