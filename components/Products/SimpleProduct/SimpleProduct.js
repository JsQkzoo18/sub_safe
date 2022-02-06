import {
  Box,
  Center,
  useColorModeValue,
  Text,
  Stack,
  Image,
  Tag,
  Flex,
  Divider,
  IconButton,
  Wrap,
} from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { formatPrice } from "../../../utils/formatPrice";
import { colorModeSchema } from "../../../utils/colorMode";
import { useRouter } from "next/router";
import { CgToggleOn, CgToggleOff } from "react-icons/cg";
import { useState } from "react";
import { addAuctionAPI } from "../../../api/auctions";
import { useAuth } from "../../../hooks";
import { current_time } from "../../../utils/currentTime";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

export default function SimpleProduct({
  name,
  startingBid,
  currentBid,
  id = "oso1",
  description = "",
  date,
  category,
  mainImage,
  isActive = false,
}) {
  const router = useRouter();
  const { auth } = useAuth();

  const [active, setActive] = useState(false);

  const data = {
    current_time,
    article: `${id}`,
    payment: null,
  };

  // console.log(data);

  const activeAuction = async (token, data) => {
    const response = await addAuctionAPI(token, data);
    console.log(response);
  };

  return (
    <Center>
      <Box>
        <Link href={`/products/${id}`}>
          <MotionBox
            role={"group"}
            p={3}
            mt={2}
            mb={2}
            maxW={"320px"}
            w={"full"}
            bg={useColorModeValue("white", "black_s")}
            boxShadow={"xl"}
            rounded={"lg"}
            cursor={"pointer"}
            whileHover={{
              scale: 1.025,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Box
              rounded={"lg"}
              pos={"relative"}
              height={"230px"}
              w={"full"}
              _groupHover={{
                _after: {
                  filter: "blur(10px)",
                },
              }}
            >
              <MotionImage
                rounded={"lg"}
                height={230}
                width={"full"}
                objectFit={"cover"}
                src={mainImage}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                position={"relative"}
              />
              <Flex justify={"flex-start"} alignItems={"flex-start"} mt={3}>
                <Tag colorScheme={colorModeSchema()}>{category}</Tag>
              </Flex>
            </Box>
            <Stack pt={10} align={"left"} mt={2}>
              <Text
                color={useColorModeValue("gray.700", "gray.300")}
                fontSize={"md"}
                fontWeight={"600"}
                textTransform={"uppercase"}
              >
                {name}
              </Text>
              <Text
                color={useColorModeValue("gray.700", "gray.200")}
                fontSize={"xl"}
                fontWeight={"800"}
                textTransform={"uppercase"}
              >
                {formatPrice(currentBid ?? startingBid)}
              </Text>
              <Text
                fontSize={"sm"}
                fontWeight={500}
                color={useColorModeValue("gray.500", "gray.400")}
                isTruncated
                maxW={"260px"}
              >
                {description}
              </Text>
              <Divider />
              <Text
                fontSize={"sm"}
                fontWeight={400}
                color={useColorModeValue("gray.600", "gray.500")}
                isTruncated
                maxW={"260px"}
              >
                {date}
              </Text>
            </Stack>
          </MotionBox>
        </Link>
        {router.pathname === "/user/my-products" && (
          <Flex justify="flex-start" align="center">
            <IconButton
              onClick={() => activeAuction(auth?.token, data)}
              icon={
                !isActive ? (
                  <CgToggleOff color="red" />
                ) : (
                  <CgToggleOn color="green" />
                )
              }
            />
            <Text ml={5}>
              {!isActive ? "Subasta Inactiva" : "Subasta Activa"}
            </Text>
          </Flex>
        )}
      </Box>
    </Center>
  );
}
