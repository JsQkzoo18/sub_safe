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

export default function Register() {
  const [loading, setLoading] = useState(false);

  const randomNumer = random(1, 10);

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
          phone: `${phone}`,
          city: 1,
          gender: "M",
        };

        console.log(dataForm);

        try {
          const response = await registerAPI(dataForm);
          console.log(response);
        } catch (error) {
          toast.error(error.message);
        }
        setLoading(false);
        // actions.resetForm();
      }}
    >
      {(formik) => (
        <ScaleFade initialScale={0.9} in={true}>
          <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "grayDark")}
          >
            <Stack
              spacing={8}
              mx={"auto"}
              maxW={"lg"}
              marginTop={15}
              py={20}
              px={6}
              as="form"
              onSubmit={formik.handleSubmit}
            >
              <Stack align={"center"}>
                <Heading fontSize={"4xl"} textAlign={"center"}>
                  Regístrate
                </Heading>
                <Text fontSize={"lg"} color={"gray.600"}>
                  para disfrutar todas las características✌️
                </Text>
              </Stack>
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "blueDark")}
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
                    placeholder="Nombre de usuario (autogenerado)"
                    type="text"
                    label="Nombre de usuario"
                    isReadOnly
                    value={
                      (formik.values.username =
                        formik.values.first_name.length > 0 &&
                        formik.values.last_name.length > 0
                          ? `${formik.values.first_name}_${formik.values.last_name}_${randomNumer}`
                          : "")
                    }
                  />

                  <TextField
                    name="phone"
                    placeholder="907865457"
                    type="tel"
                    label="Numero de celular"
                    maxLength={9}
                    isRequired
                    value={formik.values.phone}
                  />

                  <CustomAutoCompleteInput />
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
                      size="lg"
                      bg={"purpleDark"}
                      color={"white"}
                      _hover={{
                        bg: "#6F57D2",
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

function AdditionalLinks() {
  return (
    <Stack pt={6}>
      <Text align={"center"}>
        Ya tienes una cuenta?
        <br />
        <NextLink href="/login" passHref>
          <Link color={"purpleDark"}>Iniciar Sesión</Link>
        </NextLink>
      </Text>
    </Stack>
  );
}
