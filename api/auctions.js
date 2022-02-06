import { BASE_PATH } from "../utils/env";

/**
 * It creates a auction for a product.
 * @returns The result of the API call.
 */
export async function addAuctionAPI(token, formData) {
  try {
    const compositeUrl = `${BASE_PATH}/subastas/`;
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

/**
 * It gets the auction by ID.
 * @returns The result of the API call.
 */
export async function getAuctionByIDAPI(id) {
  try {
    const compositeUrl = `${BASE_PATH}/subastas/${id}`;
    const response = await fetch(compositeUrl);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
