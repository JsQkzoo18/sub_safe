import { useColorMode } from "@chakra-ui/react";

/**
 * It returns the color scheme based on the color mode.
 * @returns The color schema.
 */
export const colorModeSchema = () => {
  const { colorMode } = useColorMode();
  return colorMode === "light" ? "pink" : "orange";
};
