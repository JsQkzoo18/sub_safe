import { size } from "lodash";
import { BASE_PATH } from "../utils/env";

export async function getAllProductsAPI() {
  try {
    const compositeUrl = `${BASE_PATH}/articulos`;
    const response = await fetch(compositeUrl);
    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
}

export async function getProductByIDAPI(id) {
  try {
    if (!id) return null;
    const compositeUrl = `${BASE_PATH}/articulos/${id}`;
    const response = await fetch(compositeUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}

export async function getProductsByUserAPI(token) {
  try {
    const compositeUrl = `${BASE_PATH}/articulos/por-usuario`;

    const params = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(compositeUrl, params);
    const data = await response.json();

    return data;
  } catch (error) {
    return null;
  }
}

export async function getProductsByCategoryAPI(id) {
  try {
    const compositeUrl = `${BASE_PATH}/articulos/por-categoria/${id}`;

    const response = await fetch(compositeUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}

export async function addProductAPI(token, formData) {
  try {
    const compositeUrl = `${BASE_PATH}/articulos/`;
    const params = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    };

    const response = await fetch(compositeUrl, params);
    const result = await response.json();

    console.log(result);
    return result;
  } catch (error) {
    return null;
  }
}
