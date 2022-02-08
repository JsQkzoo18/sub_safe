import React, { useState } from "react";
import {
  Flex,
  Box,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  ScaleFade,
} from "@chakra-ui/react";
import NextLink from "next/link";
import toast from "react-hot-toast";
import { Formik } from "formik";
import * as Yup from "yup";

import CustomAutoCompleteInput from "../../Forms/AutoComplete/CustomAutoCompleteInput";
import TextField from "../../Forms/TextField/TextField";
import {
  registerInitialValues,
  registerValidationSchema,
} from "../../../utils/formValidation";

import { registerAPI } from "../../../api/user";

import { random } from "../../../utils/random";
import { useRouter } from "next/router";

export default function Register() {
  const [loading, setLoading] = useState(false);

  const randomNumber = random(1, 10);
  const router = useRouter();

  return (
    <Formik
      initialValues={registerInitialValues()}
      validationSchema={Yup.object(registerValidationSchema())}
      onSubmit={async (values, actions) => {
        setLoading(true);
        const { first_name, last_name, username, phone, email, password } =
          values;

        const dataForm = {
          first_name,
          last_name,
          username,
          email,
          password,
          phone: `593${phone}`,
          city: 1,
          gender: "M",
        };

        try {
          const response = await registerAPI(dataForm);
          router.push("/registration-complete");
        } catch (error) {
          toast.error(error.message);
        }
        setLoading(false);
      }}
    >
      {(formik) => (
        <ScaleFade initialScale={0.9} in={true}>
          <Flex
            h={{ base: "100%", lg: "70vh" }}
            minH={{ base: "100%", lg: "100vh" }}
            overflowY={"scroll"}
            justify={"center"}
            bg={useColorModeValue("silver_p", "black_p")}
            pt={10}
          >
            <Stack
              spacing={8}
              mx={"auto"}
              maxW={"lg"}
              mt={"60px"}
              as="form"
              id="register"
              onSubmit={formik.handleSubmit}
            >
              <Header />
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "black_s")}
                boxShadow={"lg"}
                p={8}
              >
                <Stack spacing={4}>
                  <HStack>
                    <Box>
                      <TextField
                        name="first_name"
                        placeholder="Ingresa tú nombre"
                        type="text"
                        label="Nombre"
                        isRequired
                      />
                    </Box>
                    <Box>
                      <TextField
                        name="last_name"
                        placeholder="Ingresa tú apellido"
                        type="text"
                        label="Apellido"
                        isRequired
                      />
                    </Box>
                  </HStack>

                  <TextField
                    name="username"
                    placeholder="nickname"
                    type="text"
                    label="Nombre de usuario"
                    helper="El nombre de usuario se genera automáticamente"
                    isReadOnly
                    value={
                      (formik.values.username =
                        formik.values.first_name.length > 0 &&
                        formik.values.last_name.length > 0
                          ? `${formik.values.first_name}_${formik.values.last_name}_${randomNumber}`
                          : "")
                    }
                  />

                  <TextField
                    name="phone"
                    placeholder="907865457"
                    type="tel"
                    label="Número de celular"
                    maxLength={9}
                    isRequired
                    value={formik.values.phone}
                  />

                  <CustomAutoCompleteInput helper="Escribe el nombre de tú ciudad" />
                  <TextField
                    name="email"
                    placeholder="Ingresa tú email"
                    type="email"
                    label="Correo electrónico"
                    isRequired
                  />

                  <TextField
                    name="password"
                    placeholder="Ingresa tú contraseña"
                    type="password"
                    label="Contraseña"
                    ispass
                    isRequired
                  />

                  <TextField
                    name="confirmPassword"
                    placeholder="Confirma tú contraseña"
                    type="password"
                    label="Confirma la contraseña"
                    isRequired
                  />

                  <Stack spacing={10} pt={2}>
                    <Button
                      type="submit"
                      form="register"
                      size="lg"
                      border={"2px"}
                      borderColor={useColorModeValue(
                        "primaryLight",
                        "primaryDark"
                      )}
                      isLoading={loading}
                      loadingText={"Registrando"}
                      bg={useColorModeValue("primaryLight", "black_p")}
                      color="white"
                      transition={"0.2s transform ease-in-out"}
                      willChange={"transform"}
                      _hover={{
                        bg: useColorModeValue("pink", "primaryDark"),
                        color: useColorModeValue("primaryLight", "white"),
                        transform: "scale(1.01)",
                        willChange: "transform",
                      }}
                    >
                      Regístrate
                    </Button>
                  </Stack>

                  <AdditionalLinks />
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </ScaleFade>
      )}
    </Formik>
  );
}

function Header() {
  return (
    <Stack align={"center"}>
      <Heading fontSize={"4xl"} textAlign={"center"}>
        Regístrate
      </Heading>
      <Text fontSize={"lg"} color={"gray.600"}>
        para disfrutar todas las características✌️
      </Text>
    </Stack>
  );
}
function AdditionalLinks() {
  return (
    <Stack pt={6}>
      <Text align={"center"}>
        Ya tienes una cuenta?
        <br />
        <NextLink href="/login" passHref>
          <Link color={"red"}>Iniciar Sesión</Link>
        </NextLink>
      </Text>
    </Stack>
  );
}
