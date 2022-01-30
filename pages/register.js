import React from "react";
import Register from "../components/Auth/Register";
import SEO_C from "../components/SEO_C";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";

export default function register() {
  return (
    <AuthLayout>
      <SEO_C title="Crear cuenta - SubaSafe" />
      <Register />
    </AuthLayout>
  );
}
