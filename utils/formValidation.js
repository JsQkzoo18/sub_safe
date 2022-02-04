import * as Yup from "yup";
import { formatPrice } from "./formatPrice";

/* The code above is a JavaScript function that takes in a string and returns a boolean value. 
The function checks if the string contains at least one lowercase letter, one uppercase letter, one
number, and one special character. 
If the string passes all of these checks, the function returns true. Otherwise, it returns false. */
const lowercaseRegex = /(?=.*[a-x])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;
const specialRegex = /[!@#$%^&*()]+/;
const onlyLetters = /^[a-z]+$/gi;
const onlyNumbers = /^([0-9])*$/;
/**
 * The function returns an object with two properties, email and password, both set to an empty string
 * @returns an object with the email and password fields set to empty strings.
 */

export function loginInitialValues() {
  return {
    email: "",
    password: "",
  };
}

/**
 * It validates the login form.
 * @returns A Yup schema object.
 */
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
    starting_bid: 0,
    main_image: "",
    image_1: "",
    image_2: "",
    image_3: "",
    image_4: "",
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
    starting_bid: Yup.number()
      .strict(true)
      .required("Ingresa la oferta inicial por favor!"),
    main_image: Yup.string().required("La imagen principal es necesaria"),
  };
}

export function bidInitialValues(currentBid) {
  return {
    offer: currentBid,
  };
}

export function bidValidationSchema(currentBid) {
  const min = parseFloat(currentBid).toFixed(2);
  const max = 1_000_000;
  return {
    offer: Yup.number()
      .required("Debes ingresar tu oferta!")
      .max(max, `El valor maximo es ${formatPrice(max)}`),
  };
}
