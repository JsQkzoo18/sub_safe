import { LockIcon } from "@chakra-ui/icons";
import { Alert, AlertDescription, AlertTitle } from "@chakra-ui/react";

export default function RequiredLogin({
  title = " Inicio de sesión requerido!",
  description = "Necesitas una cuenta?",
}) {
  return (
    <Alert
      status="info"
      variant="solid"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="150px"
      rounded={"md"}
      mt={5}
    >
      <LockIcon boxSize="40px" />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        {title}
      </AlertTitle>
      <AlertDescription maxWidth="sm">{description}</AlertDescription>
    </Alert>
  );
}
