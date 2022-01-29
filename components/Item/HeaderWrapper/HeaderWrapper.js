import {
  Box,
  Text,
  Heading,
  useColorModeValue,
  Badge,
  WrapItem,
  Divider,
  Tag,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../../lib/animations";

const HeadingMotion = motion(Heading);
const MotionText = motion(Text);

export const HeaderWrapper = ({
  name = " Ositos Cariñosos",
  category = "Articulos",
  currentBid = 126,
}) => (
  <Box>
    <Tag
      size="lg"
      bg={useColorModeValue("gray.300", "purpleDark")}
      color={useColorModeValue("purpleDark", "white")}
      borderRadius="full"
      mb={2}
    >
      {category}
    </Tag>
    <HeadingMotion
      lineHeight={1.1}
      fontWeight={600}
      fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
      variants={fadeInUp}
    >
      {name}
    </HeadingMotion>
    <MotionText
      color={useColorModeValue("gray.900", "gray.400")}
      fontWeight={300}
      fontSize={"2xl"}
      mt={5}
      variants={fadeInUp}
    >
      <Badge ml="1" fontSize="0.8em" colorScheme="purple" rounded={"5px"}>
        Oferta
      </Badge>
      <Badge ml="1" fontSize="1em" bg="transparent">
        $ {currentBid}
      </Badge>
    </MotionText>
  </Box>
);
