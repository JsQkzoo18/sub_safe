import React, { useState } from "react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { FormLabel } from "@chakra-ui/react";
import countries from "../../../public/ec.json";

export default function CustomAutoCompleteInput() {
  const [pickerItems, setPickerItems] = useState(countries);

  return (
    <>
      <FormLabel>Ciudad</FormLabel>
      <AutoComplete openOnFocus closeOnSelect maxSuggestions={4}>
        <AutoCompleteInput variant="filled" />
        <AutoCompleteList>
          {pickerItems.map((x, oid) => (
            <AutoCompleteItem
              key={x.value}
              value={x.value.toString()}
              label={x.label}
              align="center"
              textTransform={"capitalize"}
            >
              {x.label}
            </AutoCompleteItem>
          ))}
        </AutoCompleteList>
      </AutoComplete>
    </>
  );
}
