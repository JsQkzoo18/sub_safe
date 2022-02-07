import { Button } from "@chakra-ui/react";
import { colorModeSchema } from "../../../utils/colorMode";

export function SubmitButton({ form = "my-form" }) {
  return (
    <Button type="submit" form={form} colorScheme={colorModeSchema()}>
      Agregar
    </Button>
  );
}
