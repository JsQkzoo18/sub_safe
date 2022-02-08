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

export default function CustomAutoCompleteInput({ helper = "", formik }) {
  const [pickerItems, setPickerItems] = useState(countries);

  console.log(formik.values);
  console.log(formik.values.city);

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
              onChange={(event) => {
                console.log("hla", "city", event.target.value);
                // formik.setFieldValue("city", event.target.value);
              }}
            >
              {x.label}
            </AutoCompleteItem>
          ))}
        </AutoCompleteList>
      </AutoComplete>
      {helper.length > 0 && (
        <FormHelperText
          pl={1}
          color={useColorModeValue("primaryLight", "primaryDark")}
        >
          {helper} *
        </FormHelperText>
      )}
    </FormControl>
  );
}
