import React, { createContext } from "react";
import { setToken } from "../api/token";
import { getMeAPI } from "../api/user";
import { useUser } from "../hooks";

export const AuthContext = createContext({
  auth: undefined,
  login: () => null,
  logout: () => null,
});

export function AuthProvider({ children }) {
  const getMe = async (token) => {
    try {
      const response = await getMeAPI(token);
      console.log("/aut/me.", response);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const login = async (token) => {
    console.log("Login");
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
