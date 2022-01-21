import GridProduct from "../components/GridProduct/GridProduct";
import SimpleLayout from "../layouts/SimpleLayout/SimpleLayout";
import SEO_C from "../components/SEO_C";

export default function Home() {
  return (
    <SimpleLayout>
      <SEO_C />
      <GridProduct />
    </SimpleLayout>
  );
}
