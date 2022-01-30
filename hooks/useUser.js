import { getMeAPI } from "../api/user";

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
