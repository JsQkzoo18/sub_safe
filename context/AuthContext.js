import React, { createContext } from "react";
import { setToken } from "../api/token";
import { getMeApi } from "../api/user";
import { useUser } from "../hooks";

export const AuthContext = createContext({
  auth: undefined,
  login: () => null,
  logout: () => null,
});

export function AuthProvider(props) {
  const { children } = props;

  const getMe = async (token) => {
    try {
      const response = await getMeApi(token);
      console.log(response);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const login = async (token) => {
    setToken(token);

    console.log(getMe(token));
  };

  const valueContext = {
    auth: null,
    login,
    logout: () => console.log("Logout"),
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
