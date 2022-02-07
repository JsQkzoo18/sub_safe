import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import * as React from "react";
import { FaArrowRight } from "react-icons/fa";
import { addPaymentAPI } from "../../api/payments";
import { useAuth } from "../../hooks";
import { colorModeSchema } from "../../utils/colorMode";
import { formatPrice } from "../../utils/formatPrice";

const OrderSummaryItem = (props) => {
  const { label, value, children } = props;

  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export const CartOrderSummary = ({
  currentBid,
  showPaymentComplete,
  setShowPaymentComplete,
}) => {
  const { auth } = useAuth();

  const { query } = useRouter();

  console.log(query.payment);

  const router = useRouter();

  const data = {
    description: `Pago: ${currentBid}`,
    payment_type: 1,
    article: query?.payment,
    status_payment: 1,
  };
  const addPayment = async () => {
    const result = await addPaymentAPI(auth.token, data);
    console.log(result);
    setShowPaymentComplete(true);
  };

  return (
    <Stack
      spacing="8"
      borderWidth="1px"
      rounded="lg"
      mt={10}
      padding="8"
      width="full"
      shadow={"md"}
      minH="300px"
    >
      <Heading size="md">Resumen del pedido</Heading>

      <Stack spacing="6">
        <Flex justify="space-between" mb={5}>
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {formatPrice(currentBid)}
          </Text>
        </Flex>
      </Stack>

      <Button
        colorScheme={colorModeSchema()}
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
        onClick={addPayment}
      >
        Finalizar
      </Button>
    </Stack>
  );
};
