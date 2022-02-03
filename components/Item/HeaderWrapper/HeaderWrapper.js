import {
  Box,
  Text,
  Heading,
  useColorModeValue,
  Badge,
  Tag,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../../lib/animations";
import { colorModeSchema } from "../../../utils/colorMode";
import { formatPrice } from "../../../utils/formatPrice";

const HeadingMotion = motion(Heading);
const MotionText = motion(Text);

export const HeaderWrapper = ({
  name = " Ositos Cariñosos",
  category = "Articulos",
  startingBid,
  currentBid = 126,
}) => {
  return (
    <Box>
      <Tag
        size="lg"
        // bg={useColorModeValue("pink.200", "purpleDark")}
        // color={useColorModeValue("primaryLight", "primaryDark")}
        colorScheme={colorModeSchema()}
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
        <Badge
          ml="1"
          fontSize="0.8em"
          colorScheme={colorModeSchema()}
          rounded={"5px"}
        >
          Oferta
        </Badge>
        <Badge ml="1" fontSize="1em" bg="transparent">
          {formatPrice(currentBid ?? startingBid)}
        </Badge>
      </MotionText>
    </Box>
  );
};
