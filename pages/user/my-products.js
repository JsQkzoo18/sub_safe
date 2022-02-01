import React from "react";
import { Text } from "@chakra-ui/react";
import SimpleLayout from "../../layouts/SimpleLayout/SimpleLayout";
import SEO_C from "../../components/SEO_C";
import GridProduct from "../../components/GridProduct/GridProduct";
import { useAuth } from "../../hooks";
import { useGetProductByUser } from "../../hooks/useProduct";
import { size } from "lodash";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Loader from "../../components/Loader";

export default function UserProducts() {
  const { auth } = useAuth();
  const { products, loading } = useGetProductByUser(auth?.token);

  if (loading) return <Loader />;
  return (
    <SimpleLayout>
      <SEO_C />
      <BreadCrumb page={"Mis productos"} />{" "}
      {size(products) > 0 && <GridProduct products={products} />}
    </SimpleLayout>
  );
}
