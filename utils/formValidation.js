import * as Yup from "yup";

const lowercaseRegex = /(?=.*[a-x])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;
const specialRegex = /[!@#$%^&*()]+/;
const onlyLetters = /^[a-z]+$/gi;
const onlyNumbers = /^([0-9])*$/;

export function loginInitialValues() {
  return {
    email: "",
    password: "",
  };
}

export function loginValidationSchema() {
  return {
    email: Yup.string()
      .strict(true)
      .required("Ingresa tu correo por favor!")
      .email("El formato del correo no es correcto"),
    password: Yup.string()
      .strict(true)
      .required("Ingresa tu contraseña por favor!")
      .min(8, "La contraseña debe tener más de 8 carácteres"),
  };
}

export function registerInitialValues() {
  return {
    first_name: "",
    last_name: "",
    username: "",
    phone: "",
    city: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
}

export function registerValidationSchema() {
  return {
    first_name: Yup.string()
      .min(3, "El nombre es demasiado corto")
      .required("El nombre es necesario")
      .matches(onlyLetters, "Solo se permiten letras"),
    last_name: Yup.string()
      .required("El apellido es necesario")
      .min(3, "El apellido es demasiado corto")
      .matches(onlyLetters, "Solo se permiten letras"),
    username: Yup.string(),
    city: Yup.string().required("Debe seleccionar una ciudad"),
    phone: Yup.string()
      .max(9, "El numero maximo es 9")
      .matches(onlyNumbers, "Solo se permiten numeros"),
    email: Yup.string()
      .strict(true)
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

export function commentInitialValues() {
  return {
    title: "",
    content: "",
  };
}

export function commentValidationSchema() {
  return {
    title: Yup.string()
      .strict(true)
      .required("Ingresa el titulo por favor!")
      .max(60, "El titulo debe tener menos de 60 carácteres"),
    content: Yup.string()
      .strict(true)
      .required("Ingresa la descripción por favor!")
      .max(100, "La descripción debe tener menos de 100 carácteres"),
  };
}

export function productInitialValues() {
  return {
    name: "",
    description: "",
    starting_bid: "",
  };
}

export function productValidationSchema() {
  return {
    name: Yup.string()
      .strict(true)
      .required("Ingresa el nombre por favor!")
      .max(30, "El nombre debe tener menos de 30 carácteres"),
    description: Yup.string()
      .strict(true)
      .required("Ingresa la descripción por favor!")
      .max(100, "La descripción debe tener menos de 100 carácteres"),
    starting_bid: Yup.string()
      .strict(true)
      .required("Ingresa la oferta inicial por favor!"),
  };
}
