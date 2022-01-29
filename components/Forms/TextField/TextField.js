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
  Text,
  FormHelperText,
  useColorModeValue,
} from "@chakra-ui/react";
import { Field, useField } from "formik";
import { useState } from "react";
import PasswordStrengthMeter from "../PasswordStrengthMeter/PasswordStrengthMeter ";

const TextField = ({
  label,
  helper = "",
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
        isInvalid={
          (meta.error && meta.value?.length > 0) || (meta.error && meta.touched)
        }
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
                  {showPassword ? (
                    <ViewIcon
                      color={useColorModeValue("silver_p", "white")}
                    />
                  ) : (
                    <ViewOffIcon
                      color={useColorModeValue("black_t", "white")}
                    />
                  )}
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
        {helper.length > 0 && (
          <FormHelperText
            color={useColorModeValue("black_s", "white")}
            ml={1}
          >
            {helper}
          </FormHelperText>
        )}
        <Collapse
          in={
            (meta.error && meta.value?.length > 0) ||
            (meta.error && meta.touched)
          }
          animateOpacity
        >
          <FormErrorMessage>
            <Alert
              status="warning"
              variant="subtle"
              rounded={"md"}
              fontWeight={"500"}
            >
              <AlertIcon />
              <Text color={"yellow.600"}>{meta.error}</Text>
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
