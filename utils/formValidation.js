import * as Yup from "yup";

const lowercaseRegex = /(?=.*[a-x])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;
const specialRegex = /[!@#$%^&*()]+/;

export function initialValues() {
  return {
    email: "",
    password: "",
  };
}

export function validationSchema() {
  return {
    email: Yup.string()
      .email("El formato del correo no es correcto")
      .required("Ingresa tu correo por favor!"),
    password: Yup.string()
      .strict(true)
      .trim("No se permiten espacios en blanco")
      .matches(
        lowercaseRegex,
        "Por lo menos un carácter debe estar en minúscula"
      )
      .matches(
        uppercaseRegex,
        "Por lo menos un carácter debe estar en mayúscula"
      )
      .matches(numericRegex, "Por lo menos un carácter debe ser númerico")
      .matches(specialRegex, "Por lo menos un carácter debe ser especial")
      .required("Ingresa tu contraseña por favor!")
      .min(8, "La contraseña debe tener más de 8 carácteres"),
  };
}
