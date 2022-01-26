import React, { useState } from "react";
import {
  Flex,
  Box,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  ScaleFade,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Formik } from "formik";
import * as Yup from "yup";

import {
  loginInitialValues,
  loginValidationSchema,
} from "../../../utils/formValidation";
import TextField from "../../Forms/TextField/TextField";
import { loginAPI } from "../../../api/user";
import toast from "react-hot-toast";
import { useAuth } from "../../../hooks/useAuth";

export default function Login() {
  const [loading, setLoading] = useState(false); //Promise status check
  const { login } = useAuth();
  return (
    <Formik
      validateOnBlur
      initialValues={loginInitialValues()}
      validationSchema={Yup.object(loginValidationSchema())}
      onSubmit={async (values, actions) => {
        setLoading(true);
        try {
          const response = await loginAPI(values);
          const { access } = response;
          console.log(access);
          login(access);
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
              py={12}
              px={6}
              as="form"
              onSubmit={formik.handleSubmit}
            >
              <Stack align={"center"}>
                <Heading fontSize={"4xl"}>Inicia Sesión en tu cuenta</Heading>
                <Text fontSize={"lg"} color={"gray.600"}>
                  para disfrutar todas las{" "}
                  <Link color={"purpleDark"}>características</Link>
                  ✌️
                </Text>
              </Stack>
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "blueDark")}
                boxShadow={"lg"}
                p={8}
              >
                <Stack spacing={4}>
                  <TextField
                    name="email"
                    placeholder="Ingresa tú email"
                    type="email"
                    label="Correo electrónico"
                  />

                  <TextField
                    name="password"
                    placeholder="Ingresa tú contraseña"
                    type="password"
                    label="Contraseña"
                  />

                  <AditionalLinks />

                  <Button
                    type="submit"
                    bg={"purpleDark"}
                    color={"white"}
                    _hover={{
                      bg: "#6F57D2",
                    }}
                  >
                    Iniciar Sesión
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </ScaleFade>
      )}
    </Formik>
  );
}

function AditionalLinks() {
  return (
    <Stack spacing={10}>
      <Stack
        direction={{ base: "column", sm: "row" }}
        align={"start"}
        justify={"space-between"}
      >
        <NextLink href="/register" passHref>
          <Link color={"gray.400"}>No tienes una cuenta?</Link>
        </NextLink>

        <NextLink href="/forgot-password" passHref>
          <Link color={"#5034C8"}>Olvidaste la contraseña?</Link>
        </NextLink>
      </Stack>
    </Stack>
  );
}
