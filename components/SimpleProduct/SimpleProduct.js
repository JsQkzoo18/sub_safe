import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Skeleton,
  Tag,
  Flex,
  Divider,
} from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "../../lib/animations";
import { colorModeSchema } from "../../utils/colorMode";
import { formatPrice } from "../../utils/formatPrice";

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
}) {
  return (
    <Link href={`/products/${id}`}>
      <Center>
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
            // _after={{
            //   transition: "all .3s ease",
            //   content: '""',
            //   w: "full",
            //   h: "full",
            //   pos: "absolute",
            //   top: 0,
            //   left: 0,
            //   backgroundImage: `url(${IMAGE})`,
            //   filter: "blur(3px)",
            //   zIndex: -1,
            // }}
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
      </Center>
    </Link>
  );
}
