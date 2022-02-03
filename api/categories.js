import { BASE_PATH } from "../utils/env";

/**
 * It gets the categories from the API.
 * @returns An array of objects.
 */
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

/**
 * It gets a category by ID.
 * @returns The result of the API call.
 */
export async function getCategortByIDAPI(id) {
  try {
    const compositeUrl = `${BASE_PATH}/categorias/${id}`;
    const response = await fetch(compositeUrl);
    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
}
