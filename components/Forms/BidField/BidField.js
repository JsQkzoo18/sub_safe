import React, { useState } from "react";
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

export default function BidField({
  currentBid = 0.0,
  startedBid,
  label,
  helper = "",
  ispass = false,
  isRequired,
  isReadOnly,
  formik,
  isDisabled,
  value,
  ...props
}) {
  const parse = (val) => val.replace(/^\$/, "");
  const format = (val) => `$` + val;

  const current_bid = parseFloat(currentBid ?? startedBid);

  const [bid, setBid] = useState(current_bid);
  const [field, meta] = useField(props);

  return (
    <FormControl
      isInvalid={meta.error && meta.touched}
      isRequired={isRequired}
      isDisabled={isDisabled}
    >
      <FormLabel>{label}</FormLabel>

      <NumberInput
        onChange={(valueString) => {
          setBid(parseFloat(valueString));
          formik.setFieldValue("offer", bid);
        }}
        max={1_000_000}
        min={current_bid}
        step={10}
        value={format(bid)}
      >
        <Field as={NumberInputField} {...field} {...props} />
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
