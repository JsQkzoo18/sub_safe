import { BASE_PATH } from "../utils/constants";

export async function getMeApi(token) {
  try {
    const url = `${BASE_PATH}/api/auth/me/`;

    console.log(url);
    const params = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(url, params);
    console.log(response);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}

export async function loginApi(formData) {
  try {
    const url = `${BASE_PATH}/api/auth/login/`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    const response = await fetch(url, params);
    if (response.status !== 200) {
      throw new Error("El correo electrónico o contraseña son incorrectos");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function registerApi(formData) {
  try {
    const url = `${BASE_PATH}/api/auth/register/`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const response = await fetch(url, params);
    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
