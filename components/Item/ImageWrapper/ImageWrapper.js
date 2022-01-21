import { Image, Flex, ScaleFade } from "@chakra-ui/react";

export const ImageWrapper = ({ src, alt = "image" }) => {
  return (
    <Flex>
      <ScaleFade initialScale={0.9} in={true}>
        <Image
          rounded={"md"}
          alt={alt}
          src={"/toy.jpg"}
          fit={"cover"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%", sm: "400px", lg: "500px" }}
        />
      </ScaleFade>
    </Flex>
  );
};
