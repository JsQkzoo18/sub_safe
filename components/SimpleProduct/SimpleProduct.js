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
} from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "../../lib/animations";

const IMAGE = "/toy.jpg";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

export default function SimpleProduct({
  name,
  currentBid,
  id = "oso1",
  description = "",
  date,
  category,
  mainImage,
}) {
  return (
    <Link href={`/products/${id}`}>
      <div className="simple-product">
        <Center>
          <MotionBox
            role={"group"}
            p={3}
            mt={2}
            mb={2}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "black_s")}
            boxShadow={"xl"}
            rounded={"lg"}
            cursor={"pointer"}
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeInUp}
          >
            <Box
              rounded={"lg"}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 2,
                left: 0,
                backgroundImage: `url(${IMAGE})`,
                filter: "blur(5px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(10px)",
                },
              }}
            >
              <MotionImage
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={mainImage}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                fallback={<Skeleton />}
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Text
                color={"gray.500"}
                fontSize={"md"}
                textTransform={"uppercase"}
              >
                {name}
              </Text>
              <Text
                fontSize={"sm"}
                fontFamily={"body"}
                fontWeight={500}
                isTruncated
                maxW={"260px"}
              >
                {description}
              </Text>

              <Text fontSize={"xl"} fontFamily={"body"} fontWeight={500}>
                $ {currentBid}
              </Text>
            </Stack>
            <Flex justify={"flex-start"} alignItems={"flex-start"}>
              <Tag colorScheme={"purple"}>{category}</Tag>
            </Flex>
          </MotionBox>
        </Center>
      </div>
    </Link>
  );
}
