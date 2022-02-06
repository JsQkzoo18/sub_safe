import {
  Box,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Tag,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { colorModeSchema } from "../../utils/colorMode";

export const CartProductMeta = (props) => {
  const { image, name, description, category } = props;
  return (
    <Stack direction="row" spacing="5" width="full">
      <Image
        rounded="lg"
        width="120px"
        height="120px"
        fit="cover"
        src={image}
        alt={name}
        draggable="false"
        loading="lazy"
      />
      <Box pt="4">
        <Stack spacing="0.5">
          <Text fontWeight="medium" fontSize={"lg"}>
            {name}
          </Text>
          <Text color={mode("gray.600", "gray.400")} fontSize="md">
            {description}
          </Text>
          <Text color={mode("gray.600", "gray.400")} fontSize="sm">
            {category}
          </Text>
        </Stack>
      </Box>
    </Stack>
  );
};
