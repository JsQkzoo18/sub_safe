import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function NumberField({ currentBid = "0" }) {
  const format = (val) => `$ ${val}`;
  const parse = (val) => val.replace(/^\$/, "");

  const [value, setValue] = useState(currentBid);

  return (
    <NumberInput
      onChange={(valueString) => setValue(parse(valueString))}
      value={format(value)}
      max={50_000_000}
      min={currentBid}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
}
