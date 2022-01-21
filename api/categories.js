import { BASE_PATH } from "../utils/constants";

export async function getCategoriesApi() {
  try {
    const url = `${BASE_PATH}/categorias`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
