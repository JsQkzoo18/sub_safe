import { useEffect, useState } from "react";
import { getAllProducts } from "../api/products";
import GridProduct from "../components/GridProduct/GridProduct";
import SimpleLayout from "../layouts/SimpleLayout/SimpleLayout";
import { size } from "lodash";

export default function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getAllProducts();
      if (size(response) > 0) setProducts(response);
      else setProducts([]);
    })();
  }, []);

  console.log(products);
  return (
    <SimpleLayout>
      <GridProduct />
    </SimpleLayout>
  );
}
