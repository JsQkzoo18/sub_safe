import { size } from "lodash";
import { useEffect, useState } from "react";
import { getCategoriesAPI, getCategortByIDAPI } from "../api/categories";

export function useGetCategories() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getCategoriesAPI();
      if (size(response) > 0) setCategories(response);
      else setCategories([]);
    })();
  }, []);
  return { categories };
}

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
