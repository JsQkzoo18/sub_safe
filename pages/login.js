import React from "react";
import Login from "../components/Auth/Login";
import SEO_C from "../components/SEO_C";
import TopBar from "../components/Header/TopBar";

export default function login() {
  return (
    <>
      <SEO_C title="Iniciar Sesión - SubaSafe" />
      <TopBar />
      <Login />
    </>
  );
}
