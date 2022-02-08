import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import * as React from "react";
import { useState } from "react";
import { fadeInUp } from "../../lib/animations";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";
import PaymentComplete from "./PaymentComplete";

export const Payment = ({ product, images }) => {
  const router = useRouter();
  const MotionBox = motion(Box);

  const [showPaymentComplete, setShowPaymentComplete] = useState(false);

  return (
    <MotionBox
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      bg={useColorModeValue("white", "black_s")}
      rounded="md"
      boxShadow={"md"}
      maxW={{
        base: "3xl",
        lg: "7xl",
      }}
      mx="auto"
      px={{
        base: "4",
        md: "8",
        lg: "12",
      }}
      py={{
        base: "6",
        md: "8",
        lg: "12",
      }}
    >
      {!showPaymentComplete && (
        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
          align={{
            lg: "flex-start",
          }}
          spacing={{
            base: "8",
            md: "16",
          }}
        >
          <Stack
            spacing={{
              base: "8",
              md: "10",
            }}
            flex="2"
          >
            <Heading fontSize="2xl" fontWeight="extrabold">
              Detalles del artículo
            </Heading>

            <Stack spacing="6">
              <CartItem product={product} images={images} />
            </Stack>
            <Divider />

            <Heading fontSize="2xl" fontWeight="extrabold">
              Detalles del pago
            </Heading>

            <Stack spacing="6">
              <CartItem product={product} images={images} />
            </Stack>
          </Stack>

          <Flex
            direction="column"
            align="center"
            justifyContent="center"
            flex="1"
            h="400px"
          >
            <CartOrderSummary
              currentBid={product.current_bid ?? product.starting_bid}
              setShowPaymentComplete={setShowPaymentComplete}
            />
            <HStack mt="6" fontWeight="semibold">
              <p>o</p>
              <Text
                cursor={"pointer"}
                color={mode("primaryLight", "primaryDark")}
                onClick={router.back}
                fontSize={"lg"}
              >
                Regresar
              </Text>
            </HStack>
          </Flex>
        </Stack>
      )}

      {showPaymentComplete && (
        <PaymentComplete
          seller={`${product?.seller?.first_name} ${product?.seller?.last_name} `}
          city={product?.seller?.city}
          mail={product?.seller?.email}
          phone={product?.seller?.phone}
          setShowPaymentComplete={setShowPaymentComplete}
        />
      )}
    </MotionBox>
  );
};
