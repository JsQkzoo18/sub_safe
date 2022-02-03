import { getMeAPI } from "../api/user";

/**
 * It returns a function that will get the current user.
 * @returns The `useUser` function returns an object with two properties: `getMe` and `setToken`.
 */
export function useUser() {
  const getMe = async (token) => {
    try {
      const response = await getMeAPI(token);
      return response;
    } catch (error) {
      throw error;
    }
  };

  return {
    getMe,
  };
}
