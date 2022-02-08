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

  return (
    <FormControl id="city" name="city">
      <FormLabel>Ciudad</FormLabel>
      <AutoComplete
        openOnFocus
        closeOnSelect
        maxSuggestions={4}
        onChange={(event) => formik.setFieldValue("city", event)}
      >
        <AutoCompleteInput
          variant="outline"
          placeholder="Selecciona tu ciuad de residencia"
          onChange={
            (event) => console.log(event)
            // formik.setFieldValue(
            //   "category",
            //   event.target.selectedOptions[0].value
            // )
          }
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
