import React from "react";
import Register from "../components/Auth/Register";
import TopBar from "../components/Header/TopBar";
import SEO_C from "../components/SEO_C";

export default function register() {
  return (
    <>
      <SEO_C title="Crear cuenta - SubaSafe" />
      <TopBar />
      <Register />
    </>
  );
}
