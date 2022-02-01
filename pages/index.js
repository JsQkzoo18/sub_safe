import GridProduct from "../components/GridProduct/GridProduct";
import SimpleLayout from "../layouts/SimpleLayout/SimpleLayout";
import SEO_C from "../components/SEO_C";
import { useGetProducts } from "../hooks/useProduct";
import { size } from "lodash";
import Loader from "../components/Loader";

export default function Home() {
  const { products, loading } = useGetProducts();

  return (
    <SimpleLayout>
      <SEO_C />

      {size(products) > 0 && !loading && <GridProduct products={products} />}
    </SimpleLayout>
  );
}
