import { size } from "lodash";
import { useEffect, useState } from "react";
import { getCategoriesApi } from "../api/categories";

export function useGetCategories() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getCategoriesApi();
      if (size(response) > 0) setCategories(response);
      else setCategories([]);
    })();
  }, []);
  return { categories };
}
