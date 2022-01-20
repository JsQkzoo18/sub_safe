import { Image, Flex } from "@chakra-ui/react";

export const ImageWrapper = ({ src, alt = "image" }) => {
  return (
    <Flex>
      <Image
        rounded={"md"}
        alt={alt}
        src={"/toy.jpg"}
        fit={"cover"}
        align={"center"}
        w={"100%"}
        h={{ base: "100%", sm: "400px", lg: "500px" }}
      />
    </Flex>
  );
};
