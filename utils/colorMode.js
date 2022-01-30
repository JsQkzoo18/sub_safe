import { useColorMode } from "@chakra-ui/react";

export const colorModeSchema = () => {
  const { colorMode } = useColorMode();
  return colorMode === "light" ? "pink" : "red";
};
