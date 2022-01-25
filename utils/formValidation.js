import * as Yup from "yup";

const lowercaseRegex = /(?=.*[a-x])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;
const specialRegex = /[!@#$%^&*()]+/;
const onlyLetters = /^[a-z]+$/gi;

export function loginInitialValues() {
  return {
    email: "",
    password: "",
  };
}

export function loginValidationSchema() {
  return {
    email: Yup.string()
      .email("El formato del correo no es correcto")
      .required("Ingresa tu correo por favor!"),
    password: Yup.string()
      .required("Ingresa tu contraseña por favor!")
      .min(8, "La contraseña debe tener más de 8 carácteres"),
  };
}

export function registerInitialValues() {
  return {
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
}

export function registerValidationSchema() {
  return {
    name: Yup.string()
      .min(3, "El nombre es demasiado corto")
      .required("El nombre es obligatorio")
      .matches(onlyLetters, "Solo se permiten letras"),
    lastname: Yup.string()
      .min(3, "El apellido es demasiado corto")
      .matches(onlyLetters, "Solo se permiten letras"),
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
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
      .required("Confirma tu contraseña por favor!"),
  };
}
