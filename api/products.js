import { BASE_PATH } from "../utils/env";

export async function getAllProductsAPI() {
  try {
    const compositeUrl = `${BASE_PATH}/api/articulos`;
    const response = await fetch(compositeUrl);
    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
}
