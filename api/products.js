import { BASE_PATH } from "../utils/constants";

export async function getAllProducts() {
  try {
    const url = `${BASE_PATH}/api/articulos`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
