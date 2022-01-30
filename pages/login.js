import Login from "../components/Auth/Login";
import SEO_C from "../components/SEO_C";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";

export default function login() {
  return (
    <AuthLayout>
      <SEO_C title="Iniciar Sesión - SubaSafe" />
      <Login />
    </AuthLayout>
  );
}
