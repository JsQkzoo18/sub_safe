import { size } from "lodash";
import { useEffect, useState } from "react";
import {
  getAllProductsAPI,
  getProductByIDAPI,
  getProductsByCategoryAPI,
  getProductsByUserAPI,
} from "../api/products";
import { getProductImages } from "../utils/extractImages";

export function useGetProducts() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await getAllProductsAPI();
      if (size(response) > 0) setProducts(response);
      else setProducts([]);
    })();
    setLoading(false);
  }, []);
  return { products, loading };
}

export function useGetProductsByCategory(id) {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);

      const response = await getProductsByCategoryAPI(id);
      if (size(response) > 0) setProducts(response);
      else setProducts([]);
    })();
    setLoading(false);
  }, [id]);
  return { products, loading };
}

export function useGetProductByID(id, reload, setProductReload) {
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await getProductByIDAPI(id);
      if (size(response) > 0) {
        setProduct(response);
        setImages(getProductImages(response));
      } else {
        setProduct([]);
        setImages([]);
      }
      setLoading(false);
      setProductReload(false);
    })();
  }, [id, reload]);

  return { product, images, loading };
}

export function useGetProductByUser(token, reload, setReloadProducts) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await getProductsByUserAPI(token);
      if (size(response) > 0) {
        setProducts(response);
      } else {
        setProducts([]);
      }
      setLoading(false);
      setReloadProducts(false);
    })();
  }, [reload]);
  return { products, loading };
}
