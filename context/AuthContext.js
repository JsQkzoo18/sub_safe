import React, { useState, createContext, useEffect } from "react";
import { getToken, setToken, deleteToken } from "../api/token";
import { useUser } from "../hooks";

export const AuthContext = createContext({
  auth: undefined,
  login: () => null,
  logout: () => null,
  setReloadUser: () => null,
});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(undefined);
  const [reloadUser, setReloadUser] = useState(false);
  const { getMe } = useUser();

  useEffect(() => {
    (async () => {
      const token = getToken();

      if (token) {
        const userData = await getMe(token);
        setAuth({ token, userData });
      } else {
        setAuth(null);
      }
      setReloadUser(false);
    })();
  }, [reloadUser]);

  const login = async (token) => {
    setToken(token);
    const userData = await getMe(token);
    setAuth({ token, userData });
  };

  const logout = () => {
    if (auth) {
      deleteToken();
      setAuth(null);
    }
  };

  //New Value Context
  const valueContext = {
    auth,
    login,
    logout,
    setReloadUser,
  };

  if (auth === undefined) return null;
  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
