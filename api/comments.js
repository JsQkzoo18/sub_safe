import { BASE_PATH } from "../utils/env";

export async function getCommentsByProductAPI(id) {
  try {
    const compositeUrl = `${BASE_PATH}/comentarios/por-articulo/${id}`;
    const response = await fetch(compositeUrl);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
