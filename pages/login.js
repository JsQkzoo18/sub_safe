import Login from "../components/Auth/Login";
import SEO_C from "../components/SEO_C";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";

/**
 * This function returns a React component that renders the login page
 * @returns The Login component is being returned.
 */
export default function login() {
  return (
    <AuthLayout>
      <SEO_C title="Iniciar Sesión - SubaSafe" />
      <Login />
    </AuthLayout>
  );
}
