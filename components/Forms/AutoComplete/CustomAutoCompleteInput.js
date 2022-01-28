import React, { useState } from "react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  InputGroup,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import countries from "../../../public/ec.json";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";

export default function CustomAutoCompleteInput({ helper = "" }) {
  const [pickerItems, setPickerItems] = useState(countries);

  return (
    <FormControl id="city">
      <FormLabel>Ciudad</FormLabel>
      <AutoComplete openOnFocus closeOnSelect maxSuggestions={4}>
        <AutoCompleteInput
          variant="outline"
          placeholder="Selecciona tu ciudad de residencia"
        />

        <AutoCompleteList>
          {pickerItems.map((x, oid) => (
            <AutoCompleteItem
              key={x.value}
              value={x.value.toString()}
              label={x.label}
              textTransform={"capitalize"}
            >
              {x.label}
            </AutoCompleteItem>
          ))}
        </AutoCompleteList>
      </AutoComplete>
      {helper.length > 0 && (
        <FormHelperText color={useColorModeValue("purpleDark", "white")}>
          {helper}
        </FormHelperText>
      )}
    </FormControl>
  );
}
