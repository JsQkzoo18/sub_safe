import { size } from "lodash";
import { useEffect, useState } from "react";
import { getCategoriesAPI, getCategortByIDAPI } from "../api/categories";

/**
 * It fetches the categories from the API and sets the categories state to the response.
 * @returns The `useGetCategories` hook returns an object with two properties: `categories` and
 * `setCategories`. The `categories` property is the array of categories returned from the API call.
 * The `setCategories` property is a function that can be used to update the `categories`
 */
export function useGetCategories() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      const response = await getCategoriesAPI();
      if (size(response) > 0) setCategories(response);
      else setCategories([]);
    })();
    return () => ac.abort();
  }, []);
  return { categories };
}

/**
 * It gets the category by ID.
 * @returns The `useGetCategoryByID` hook returns an object with two properties: `category` and
 * `setCategory`. The `category` property is the category returned from the API call. The `setCategory`
 * property is a function that is used to update the `category` property.
 */
export function useGetCategoryByID(id) {
  const [category, setCategory] = useState();

  useEffect(() => {
    (async () => {
      const response = await getCategortByIDAPI(id);
      if (size(response) > 0) setCategory(response);
      else setCategory(null);
    })();
  }, [id]);
  return { category };
}
