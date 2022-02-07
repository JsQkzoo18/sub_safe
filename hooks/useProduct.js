import { size } from "lodash";
import { useEffect, useState } from "react";
import {
  getActiveProductsAPI,
  getActiveProductsByUserAPI,
  getAllProductsAPI,
  getInactiveProductsAPI,
  getInactiveProductsByUserAPI,
  getProductByIDAPI,
  getProductsByCategoryAPI,
  getProductsByUserAPI,
  getPurchasedProductsByUserAPI,
} from "../api/products";
import { getProductImages } from "../utils/extractImages";

/**
 * It gets all the products from the database and returns them.
 * @returns The useGetProductByID function returns a product object, an array of images, and a loading
 * boolean.
 */
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

export function useGetActiveProducts() {
  const [products, setProducts] = useState(null);
  const [activeLoading, setActiveLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setActiveLoading(true);
      const response = await getActiveProductsAPI();
      if (size(response) > 0) setProducts(response);
      else setProducts([]);
    })();
    setActiveLoading(false);
  }, []);
  return { products, activeLoading };
}

export function useGetInactiveProducts() {
  const [products, setProducts] = useState(null);
  const [inactiveLoading, setInactiveLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setInactiveLoading(true);
      const response = await getInactiveProductsAPI();
      if (size(response) > 0) setProducts(response);
      else setProducts([]);
    })();
    setInactiveLoading(false);
  }, []);
  return { products, inactiveLoading };
}
/**
 * It fetches the products by category.
 * @returns The `useGetProductsByCategory` hook returns an object with two properties: `products` and
 * `loading`. The `products` property is an array of products. The `loading` property is a boolean that
 * indicates whether the products are being fetched.
 */
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

/**
 * It gets the product by ID and returns the product and images.
 * @returns The `useGetProductByID` hook returns a `product` and `images` object. The `product` object
 * contains the product data and the `images` object contains the product images.
 */
export function useGetProductByID(id, reload = null, setProductReload = null) {
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
      setProductReload && setProductReload(false);
    })();
  }, [id, reload]);

  return { product, images, loading };
}
/**
 * It gets the products by user.
 * @returns The `useGetProductByUser` hook returns an object with two properties: `products` and
 * `loading`.
 */

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
/**
 * This function is used to get the active products by user
 * @returns an object with two properties: activeProducts and loading.
 */

export function useGetActiveProductByUser(token, reload, setReloadProducts) {
  const [activeProducts, setActiveProducts] = useState([]);
  const [activeLoading, setActiveLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setActiveLoading(true);
      const response = await getActiveProductsByUserAPI(token);
      if (size(response) > 0) {
        setActiveProducts(response);
      } else {
        setActiveProducts([]);
      }
      setActiveLoading(false);
      setReloadProducts(false);
    })();
  }, [reload]);
  return { activeProducts, activeLoading };
}

/**
 * It gets the inactive products by user.
 * @returns The `useGetInactiveProductByUser` hook returns an object with two properties:
 * `inactiveProducts` and `loading`.
 */
export function useGetInactiveProductByUser(token, reload, setReloadProducts) {
  const [inactiveProducts, setInactiveProducts] = useState([]);
  const [inactiveLoading, setInactiveLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setInactiveLoading(true);
      const response = await getInactiveProductsByUserAPI(token);
      if (size(response) > 0) {
        setInactiveProducts(response);
      } else {
        setInactiveProducts([]);
      }
      setInactiveLoading(false);
      setReloadProducts(false);
    })();
  }, [reload]);
  return { inactiveProducts, inactiveLoading };
}

/**
 * It gets the purchased products by the user.
 * @returns an object with two keys: purchasedProducts and purchasedLoading.
 */
export function useGetPurchasedProductsByUser(token) {
  const [purchasedProducts, setPurchasedProducts] = useState([]);
  const [purchasedLoading, setPurchasedLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setPurchasedLoading(true);
      const response = await getPurchasedProductsByUserAPI(token);
      if (size(response) > 0) {
        setPurchasedProducts(response);
      } else {
        setPurchasedProducts([]);
      }
      setPurchasedLoading(false);
    })();
  }, []);
  return { purchasedProducts, purchasedLoading };
}
