import { Image, Flex, Skeleton, Box, AspectRatio } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionImage = motion(Image);
const FlexMotion = motion(Flex);
export const ImageWrapper = ({ url, alt = "image" }) => {
  return (
    <FlexMotion animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <AspectRatio
        ratio={4 / 3}
        w="100%"
        h={{ base: "100%", sm: "300px", md: "400px", lg: "600px" }}
        mt={{ base: 3, sm: 10, md: "25px", lg: 3 }}
      >
        <MotionImage
          rounded={"md"}
          alt={alt}
          src={url}
          objectFit={"cover"}
          w={"100%"}
          h={{ base: "100%", sm: "300px", md: "400px", lg: "100%" }}
          fallback={<Skeleton />}
          cursor={"pointer"}
        />
      </AspectRatio>
    </FlexMotion>
  );
};
