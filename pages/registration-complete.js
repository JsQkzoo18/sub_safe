import React from "react";
import TopBar from "../components/Header/TopBar";
import SuccessResult from "../components/Results/SuccessResult/SuccessResult";
import SEO_C from "../components/SEO_C";

export default function registrationComplete() {
  return (
    <>
      <SEO_C title="Revisa tu correo - SubaSafe" />
      <TopBar />
      <SuccessResult
        headerTxt="Registro"
        headerHighlightTxt="Completado"
        description="Se ha enviado un correo electrónico con el código de verificación. 
        Por favor revisa en tu bandeja de entrada.
        Nota: Si no se encuentra en tu bandeja, podría estar en SPAM
        "
        buttonTxt="Iniciar Sesión"
      />
    </>
  );
}
