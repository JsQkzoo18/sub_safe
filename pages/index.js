import GridProduct from "../components/GridProduct/GridProduct";
import SimpleLayout from "../layouts/SimpleLayout/SimpleLayout";
import SEO_C from "../components/SEO_C";
import { useGetProducts } from "../hooks/useProduct";
import { size } from "lodash";

export default function Home() {
  const { products } = useGetProducts();

  return (
    <SimpleLayout>
      <SEO_C />
      {size(products) > 0 && <GridProduct products={products} />}
    </SimpleLayout>
  );
}
