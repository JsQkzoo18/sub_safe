import { size } from "lodash";
import { useEffect, useState } from "react";
import { getAllProductsAPI, getProductsByIDAPI } from "../api/products";
import { BASE_PATH } from "../utils/env";

export function useGetProducts() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getAllProductsAPI();
      if (size(response) > 0) setProducts(response);
      else setProducts([]);
    })();
  }, []);
  return { products };
}

export function useGetProductByID(id) {
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await getProductsByIDAPI(id);
      if (size(response) > 0) {
        setProduct(response.data);
        setImages(response.imagesArray);
      } else {
        setProduct([]);
        setImages([]);
      }
      setLoading(false);
    })();
  }, [id]);
  return { product, images, loading };
}
