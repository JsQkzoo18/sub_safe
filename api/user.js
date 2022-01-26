import { BASE_PATH } from "../utils/env";

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

    // console.log(formData);

    // console.log(params.headers);
    // console.log(params.body);

    const response = await fetch(compositeUrl, params);
    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
}
