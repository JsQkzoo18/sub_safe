import {
  Stack,
  Button,
  useColorModeValue,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatGroup,
  Badge,
  Center,
  Box,
  Text,
  Flex,
  Divider,
} from "@chakra-ui/react";
import NumberField from "../Forms/BidField/BidField";
import RequiredLogin from "../RequiredLogin/RequiredLogin";
import { useAuth } from "../../hooks";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  bidInitialValues,
  bidValidationSchema,
} from "../../utils/formValidation";
import { addAuctionAPI } from "../../api/auctions";
import toast from "react-hot-toast";
import { formatPrice } from "../../utils/formatPrice";
import BidField from "../Forms/BidField/BidField";
import NextLink from "next/link";
import { addBidAPI } from "../../api/bidding";
import { colorModeSchema } from "../../utils/colorMode";

export const Bids = ({
  currentBid,
  startedBid,
  id,
  setReloadProduct,
  createdTime,
  createdDate,
  modifiedTime,
  modifiedDate,
}) => {
  const { auth } = useAuth();

  return (
    <Formik
      initialValues={bidInitialValues(currentBid ?? startedBid)}
      validationSchema={Yup.object(
        bidValidationSchema(currentBid ?? startedBid)
      )}
      onSubmit={async (values, actions) => {
        const { offer } = values;
        const formData = {
          article: id,
          offer,
        };

        try {
          const response = await addBidAPI(auth?.token, formData);
          console.log(response);
          setReloadProduct(true);
          toast.success("Oferta realizada con exito");

          // actions.resetForm();
        } catch (error) {
          toast.error(error.message);
        }
      }}
    >
      {(formik) => (
        <Stack
          spacing={4}
          overflowY="scroll"
          maxHeight={{ base: "full", md: "full", lg: "510px" }}
          h={"505px"}
          px={5}
          py={7}
          as="form"
          onSubmit={formik.handleSubmit}
        >
          <StatGroup h="100px" mb={10}>
            <Stat
              p={3}
              color={useColorModeValue("black", "white")}
              bg={useColorModeValue("green.100", "green.600")}
              rounded={"md"}
              shadow={"md"}
            >
              <StatLabel>
                <Badge
                  colorScheme={useColorModeValue("whatsapp", "gray")}
                  shadow={"lg"}
                  p={1}
                >
                  Oferta inicial
                </Badge>
              </StatLabel>
              <StatNumber>{formatPrice(startedBid)}</StatNumber>
              <StatHelpText>{createdDate}</StatHelpText>
              <StatHelpText>{createdTime}</StatHelpText>
            </Stat>
            <Stat
              p={3}
              ml={1}
              color={useColorModeValue("black", "white")}
              bg={useColorModeValue("cyan.100", "cyan.600")}
              rounded={"md"}
              shadow={"md"}
            >
              <StatLabel>
                <Badge
                  colorScheme={useColorModeValue("blue", "gray")}
                  shadow={"lg"}
                  p={1}
                >
                  Oferta actual
                </Badge>
              </StatLabel>
              <StatNumber>{formatPrice(currentBid ?? startedBid)}</StatNumber>
              <StatHelpText>{modifiedDate}</StatHelpText>
              <StatHelpText>{modifiedTime}</StatHelpText>
            </Stat>
          </StatGroup>

          <Box
            px={10}
            py={3}
            rounded={"md"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"xl"}
            overflow={"hidden"}
          >
            <Center display={"flex"} flexDirection={"column"}>
              <BidField
                name="offer"
                label="Oferta"
                currentBid={currentBid}
                startedBid={startedBid}
                isDisabled={auth ? false : true}
                formik={formik}
              />

              {auth ? (
                <Button
                  rounded={"md"}
                  type="submit"
                  w={"50%"}
                  my={5}
                  size={"lg"}
                  boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
                  py={"7"}
                  // bg={useColorModeValue("gray.900", "gray.50")}
                  // color={useColorModeValue("white", "gray.900")}
                  colorScheme={useColorModeValue("green", "whatsapp")}
                  textTransform={"uppercase"}
                  _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                  }}
                >
                  Ofertar
                </Button>
              ) : (
                <RequiredLogin />
              )}
            </Center>
            <Divider />
            <Flex
              justifyContent="space-around"
              alignItems="center"
              direction={"column"}
            >
              <Text
                w={"full"}
                align={"center"}
                fontWeight="bold"
                fontSize={"lg"}
                color={useColorModeValue("primaryLight", "primaryDark")}
              >
                Obtener el articulo?
              </Text>

              <NextLink href={`/products/payment/${id}`} passHref>
                <Button
                  rounded={"md"}
                  w={"50%"}
                  my={2}
                  size={"lg"}
                  boxShadow={"0 5px 20px 0px rgb(184 52 129 / 43%)"}
                  py={"7"}
                  // bg={useColorModeValue("gray.900", "gray.50")}
                  // color={useColorModeValue("white", "gray.900")}
                  colorScheme={colorModeSchema()}
                  textTransform={"uppercase"}
                  _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                  }}
                >
                  Pagar
                </Button>
              </NextLink>
            </Flex>
          </Box>
        </Stack>
      )}
    </Formik>
  );
};
