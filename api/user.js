import { BASE_PATH } from "../utils/env";

/**
 * It makes a request to the API to get the current user's information.
 * @returns The result of the `getMeAPI` function is a promise. The promise resolves to the result of
 * the `fetch` call.
 */
export async function getMeAPI(token) {
  try {
    const compositeUrl = `${BASE_PATH}/api/auth/me/`;
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

/**
 * It logs in a user.
 * @returns The login API returns a token.
 */
export async function loginAPI(formData) {
  try {
    const compositeUrl = `${BASE_PATH}/api/auth/login/`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    const response = await fetch(compositeUrl, params);

    //Custom response to show alert
    if (response.status !== 200) {
      throw new Error("El correo electrónico o contraseña son incorrectos");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

/**
 * It registers a user.
 * @returns The result of the API call.
 */
export async function registerAPI(formData) {
  try {
    const compositeUrl = `${BASE_PATH}/api/auth/register/`;
    const params = {
      method: "POST",
      headers: {
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
