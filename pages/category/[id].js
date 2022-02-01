import { Heading } from "@chakra-ui/react";
import { size } from "lodash";
import { useRouter } from "next/router";
import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import GridProduct from "../../components/GridProduct/GridProduct";
import Loader from "../../components/Loader";
import SEO_C from "../../components/SEO_C";
import { useGetCategoryByID } from "../../hooks/useCategories";
import { useGetProductsByCategory } from "../../hooks/useProduct";
import SimpleLayout from "../../layouts/SimpleLayout";

export default function Category() {
  const { query } = useRouter();

  const { products, loading } = useGetProductsByCategory(query?.id);
  const { category } = useGetCategoryByID(query?.id);

  if (loading) return <Loader />;

  return (
    <SimpleLayout>
      <SEO_C />
      {!loading && category && (
        <>
          <BreadCrumb secondLevel="Categorias" page={category.name} />
          {size(products) > 0 && (
            <GridProduct products={products} loading={loading} />
          )}
        </>
      )}
    </SimpleLayout>
  );
}
