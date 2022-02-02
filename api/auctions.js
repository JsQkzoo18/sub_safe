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

export async function addCommentAPI(token, formData) {
  try {
    const compositeUrl = `${BASE_PATH}/comentarios/`;
    const params = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const response = await fetch(compositeUrl, params);
    const result = await response.json();

    console.log(result);
    return result;
  } catch (error) {
    return null;
  }
}
