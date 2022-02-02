import React, { useState, createContext, useEffect } from "react";
import { getToken, setToken, deleteToken } from "../api/token";
import Loader from "../components/Loader";
import { useUser } from "../hooks";

export const AuthContext = createContext({
  auth: undefined,
  login: () => null,
  logout: () => null,
  setReloadUser: () => null,
});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const { getMe } = useUser();

  useEffect(() => {
    (async () => {
      setLoading(true);

      const token = getToken();

      if (token) {
        const userData = await getMe(token);
        setAuth({ token, userData });
      } else {
        setAuth(null);
      }
    })();
    setLoading(false);
  }, []);

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
  };

  if (loading) return null;
  if (auth === undefined) return null;
  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
