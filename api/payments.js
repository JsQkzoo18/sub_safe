import { BASE_PATH } from "../utils/env";

/**
 * It creates a new payment.
 * @returns The result of the API call.
 */
export async function addPaymentAPI(token, formData) {
  try {
    const compositeUrl = `${BASE_PATH}/pagos/`;
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

    return result;
  } catch (error) {
    return null;
  }
}
