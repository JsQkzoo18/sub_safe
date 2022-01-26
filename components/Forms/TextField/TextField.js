import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import {
  Alert,
  AlertIcon,
  Button,
  Collapse,
  InputRightElement,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { Field, useField } from "formik";
import { useState } from "react";
import PasswordStrengthMeter from "../PasswordStrengthMeter/PasswordStrengthMeter ";

const TextField = ({
  label,
  ispass = false,
  isRequired,
  isReadOnly,
  isDisabled,
  ...props
}) => {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <FormControl
        isInvalid={meta.error && meta.value?.length > 0}
        isRequired={isRequired}
      >
        <FormLabel>{label}</FormLabel>
        <InputGroup>
          {props.type === "password" ? (
            <>
              <Field
                as={Input}
                {...field}
                {...props}
                type={showPassword ? "text" : "password"}
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </>
          ) : props.type === "tel" ? (
            <>
              <InputLeftAddon children="+593" />
              <Field as={Input} {...field} {...props} />
            </>
          ) : (
            <Field
              as={Input}
              isReadOnly={isReadOnly}
              isDisabled={isDisabled}
              {...field}
              {...props}
            />
          )}
        </InputGroup>
        <Collapse in={meta.error && meta.value?.length > 0} animateOpacity>
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
      {ispass && field.value?.length > 0 && (
        <PasswordStrengthMeter password={meta.value} />
      )}
    </>
  );
};

export default TextField;
