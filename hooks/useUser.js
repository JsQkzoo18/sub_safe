import { getMeAPI } from "../api/user";

export function useUser() {
  const getMe = async (token) => {
    try {
      const response = await getMeAPI(token);
      console.log(response);
      return response;
    } catch (error) {
      throw error;
    }
  };

  return {
    getMe,
  };
}
