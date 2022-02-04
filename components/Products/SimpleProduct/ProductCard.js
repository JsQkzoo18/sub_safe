import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { PriceTag } from "./PriceTag";

export const ProductCard = (props) => {
  const { product, rootProps } = props;
  const { name, imageUrl, price, salePrice, rating } = product;
  return (
    <Stack
      spacing={useBreakpointValue({
        base: "4",
        md: "5",
      })}
    >
      <Box position="relative">
        <AspectRatio ratio={4 / 3} w="100%" maxHeight={230} maxWidth={282}>
          <Image
            src={imageUrl}
            alt={name}
            objectFit={"cover"}
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({
              base: "md",
              md: "xl",
            })}
          />
        </AspectRatio>
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            {name}
          </Text>
          <PriceTag price={price} salePrice={salePrice} currency="USD" />
        </Stack>
      </Stack>
      <Stack align="center">
        <Button colorScheme="blue" isFullWidth>
          Add to cart
        </Button>
        <Link
          textDecoration="underline"
          fontWeight="medium"
          color={useColorModeValue("gray.600", "gray.400")}
        >
          Quick shop
        </Link>
      </Stack>
    </Stack>
  );
};
