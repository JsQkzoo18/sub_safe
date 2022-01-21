import React from "react";
import ForgotPsw from "../components/Auth/ForgotPsw/ForgotPsw";
import TopBar from "../components/Header/TopBar";
import SEO_C from "../components/SEO_C";

export default function forgotPassword() {
  return (
    <>
      <SEO_C title="Recuperar contraseña - SubaSafe" />
      <TopBar />
      <ForgotPsw />
    </>
  );
}
