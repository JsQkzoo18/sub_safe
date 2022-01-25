import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Alert, AlertIcon, Collapse } from "@chakra-ui/react";
import { Field, useField } from "formik";
import PasswordStrengthMeter from "../PasswordStrengthMeter/PasswordStrengthMeter ";

const TextField = ({ label, ispass = false, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <FormControl
        isInvalid={
          ispass
            ? meta.error && meta.value.length > 0
            : meta.error && meta.touched
        }
        id={field.name}
      >
        <FormLabel>{label}</FormLabel>
        <Field as={Input} {...field} {...props} />

        <Collapse
          in={
            ispass
              ? meta.error && meta.value.length > 0
              : meta.error && meta.touched
          }
          animateOpacity
        >
          <FormErrorMessage>
            <Alert
              status="error"
              variant="subtle"
              rounded={"md"}
              fontWeight={"500"}
            >
              <AlertIcon />
              {meta.error}
            </Alert>
          </FormErrorMessage>
        </Collapse>
      </FormControl>
      {ispass && field.value.length > 0 && (
        <PasswordStrengthMeter password={meta.value} />
      )}
    </>
  );
};

export default TextField;
