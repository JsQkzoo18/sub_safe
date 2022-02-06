import {
  CloseButton,
  Flex,
  Link,
  Select,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { CartProductMeta } from "./CartProductMeta";
import { formatPrice } from "../../utils/formatPrice";

export const CartItem = ({ product, images }) => {
  const { name, description, current_bid, category } = product;

  return (
    <Flex
      direction={{
        base: "column",
        md: "row",
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={name}
        description={description}
        category={category?.name}
        image={images[0]}
      />

      {/* Desktop */}
      {/* <Flex
        width="full"
        justify="space-between"
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <Text>{formatPrice(current_bid)}</Text>
      </Flex> */}

      {/* Mobile */}
      {/* <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: "flex",
          md: "none",
        }}
      >
        <Text>{formatPrice(current_bid)}</Text>
      </Flex> */}
    </Flex>
  );
};
