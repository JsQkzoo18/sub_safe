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
import TextField from "../../Forms/TextField/TextField";
import {
  registerInitialValues,
  registerValidationSchema,
} from "../../../utils/formValidation";
import { loginApi } from "../../../api/user";
import toast from "react-hot-toast";
import { Formik } from "formik";
import * as Yup from "yup";

export default function Register() {
  return (
    <Formik
      initialValues={registerInitialValues()}
      validationSchema={Yup.object(registerValidationSchema())}
      onSubmit={async (values, actions) => {
        try {
          const response = await loginApi({
            email: "jhonmvl18@gmail.com",
            password: "admin1245",
          });
          const { access } = response;
        } catch (error) {
          toast.error(error.message);
        }
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
                        name="name"
                        placeholder="Ingresa tú nombre"
                        type="text"
                        label="Nombre"
                        isRequired
                      />
                    </Box>
                    <Box>
                      <TextField
                        name="lastname"
                        placeholder="Ingresa tú apellido"
                        type="text"
                        label="Apellido"
                      />
                    </Box>
                  </HStack>

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
                      loadingText="Submitting"
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
