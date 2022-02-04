import GridProduct from "../components/GridProduct/GridProduct";
import SimpleLayout from "../layouts/SimpleLayout/SimpleLayout";
import SEO_C from "../components/SEO_C";
import { useGetActiveProducts, useGetProducts } from "../hooks/useProduct";
import { size } from "lodash";

export default function Home() {
  /* Using the useGetProducts hook to get the products from the API. */
  const { products, loading } = useGetActiveProducts();

  return (
    <SimpleLayout>
      <SEO_C />
      {size(products) > 0 && !loading && <GridProduct products={products} />}
    </SimpleLayout>
  );
}
