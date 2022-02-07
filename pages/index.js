import GridProduct from "../components/GridProduct/GridProduct";
import SimpleLayout from "../layouts/SimpleLayout/SimpleLayout";
import SEO_C from "../components/SEO_C";
import { useGetActiveProducts } from "../hooks/useProduct";
import { size } from "lodash";
import Loader from "../components/Loader/Loader";

export default function Home() {
  /* Using the useGetProducts hook to get the products from the API. */
  const { products, loading } = useGetActiveProducts();

  if (loading) return <Loader />;

  return (
    <SimpleLayout>
      <SEO_C />
      {size(products) > 0 && !loading && (
        <GridProduct products={products} activeFooter />
      )}
    </SimpleLayout>
  );
}
