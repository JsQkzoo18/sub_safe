import React from "react";
import Auth from "../components/Auth";
import ForgotPsw from "../components/Auth/ForgotPsw/ForgotPsw";
import SEO_C from "../components/SEO";

export default function auth() {
  return (
    <>
      <SEO_C />
      <Auth />
    </>
  );
}
