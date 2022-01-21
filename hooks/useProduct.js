import { size } from "lodash";
import { useEffect, useState } from "react";
import { getAllProducts } from "../api/products";

export function useGetProducts() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getAllProducts();
      if (size(response) > 0) setProducts(response);
      else setProducts([]);
    })();
  }, []);
  return { products };
}
