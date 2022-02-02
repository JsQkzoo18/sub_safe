import {
  Alert,
  AlertIcon,
  Collapse,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Field, useField } from "formik";
import React, { useState } from "react";

export default function NumberField({
  currentBid = "0",
  label,
  helper = "",
  ispass = false,
  isRequired,
  isReadOnly,
  isDisabled,
  initialRef,
  ...props
}) {
  const format = (val) => `$ ${val}`;
  const parse = (val) => val.replace(/^\$/, "");

  const [value, setValue] = useState(currentBid);
  const [field, meta] = useField(props);

  return (
    <FormControl
      isInvalid={
        (meta.error && meta.value?.length > 0) || (meta.error && meta.touched)
      }
      isRequired={isRequired}
    >
      <FormLabel ref={initialRef}>{label}</FormLabel>

      <NumberInput
        onChange={(valueString) => setValue(parse(valueString))}
        value={value}
        max={50_000_000}
        min={currentBid}
      >
        <Field as={NumberInputField} isTruncated {...field} {...props} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      {helper.length > 0 && (
        <FormHelperText
          color={useColorModeValue("primaryLight", "primaryDark")}
          pl={1}
        >
          {helper} *
        </FormHelperText>
      )}
      <Collapse
        in={
          (meta.error && meta.value?.length > 0) || (meta.error && meta.touched)
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
            <Text color={useColorModeValue("yellow.600", "yellow.400")}>
              {meta.error}
            </Text>
          </Alert>
        </FormErrorMessage>
      </Collapse>
    </FormControl>
  );
}
