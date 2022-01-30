import { BASE_PATH } from "../utils/env";

export async function getCommentsByProductAPI(token, id) {
  try {
    const compositeUrl = `${BASE_PATH}/comentarios/${id}`;
    const params = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(compositeUrl, params);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
