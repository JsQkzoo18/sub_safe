import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true);

  const isLoginForm = () => {
    setShowLogin(true);
  };
  const isRegisterForm = () => {
    setShowLogin(false);
  };

  //Conditional Form Render

  return showLogin ? (
    <Login isRegisterForm={isRegisterForm} />
  ) : (
    <Register isLoginForm={isLoginForm} />
  );
}
