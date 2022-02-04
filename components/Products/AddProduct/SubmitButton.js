import { Button } from "@chakra-ui/react";
import { colorModeSchema } from "../../../utils/colorMode";

export function SubmitButton() {
  return (
    <Button type="submit" form="my-form" colorScheme={colorModeSchema()}>
      Agregar
    </Button>
  );
}
