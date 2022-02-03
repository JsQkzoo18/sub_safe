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
import { toInteger } from "lodash";
import React, { useState } from "react";

export default function NumberField({
  currentBid = 0.0,
  startedBid,
  label,
  helper = "",
  ispass = false,
  isRequired,
  isReadOnly,
  isDisabled,
  ...props
}) {
  const parse = (val) => val.replace(/^\$/, "");

  const current_bid = parseFloat(currentBid ?? startedBid).toFixed(2);

  const [bid, setBid] = useState(current_bid);
  const [field, meta] = useField(props);

  return (
    <FormControl isInvalid={meta.error && meta.touched} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>

      <NumberInput
        onChange={(valueString) => setBid(parseFloat(valueString).toFixed(2))}
        max={100_000}
        min={currentBid ?? startedBid}
        precision={2}
        step={10}
        value={bid}
      >
        <Field as={NumberInputField} isTruncated {...field} {...props} />
        <NumberInputStepper>
          <NumberIncrementStepper
            onChange={(valueString) =>
              setBid(parseFloat(valueString).toFixed(2))
            }
          />
          <NumberDecrementStepper
            onChange={(valueString) =>
              setBid(parseFloat(valueString).toFixed(2))
            }
          />
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
