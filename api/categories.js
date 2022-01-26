import { BASE_PATH } from "../utils/env";

export async function getCategoriesAPI() {
  try {
    const compositeUrl = `${BASE_PATH}/categorias`;
    const response = await fetch(compositeUrl);
    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
}
