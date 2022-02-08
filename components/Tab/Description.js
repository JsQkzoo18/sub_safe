import { Stack, StackDivider, useColorModeValue } from "@chakra-ui/react";
import { HeaderWrapper } from "../Item/HeaderWrapper/HeaderWrapper";
import { DescriptionWrapper } from "../Item/DescriptionWrapper/DescriptionWrapper";
import { DetailsWrapper } from "../Item/DetailsWrapper/DetailsWrapper";

export const Description = ({
  name,
  description,
  startingBid,
  currentBid,
  category,
  seller,
  date,
  color,
}) => (
  <Stack
    spacing={{ base: 6, md: 10 }}
    overflowY="scroll"
    overflowX={"hidden"}
    maxHeight={{ base: "full", md: "full", lg: "510px" }}
    h={"505px"}
    px={5}
    py={7}
  >
    <Stack
      spacing={{ base: 4, sm: 6 }}
      direction={"column"}
      divider={
        <StackDivider borderColor={useColorModeValue("gray.200", "gray.600")} />
      }
    >
      <HeaderWrapper
        name={name}
        category={category}
        startingBid={startingBid}
        currentBid={currentBid}
        color={color}
      />
      <DescriptionWrapper description={description} />

      <DetailsWrapper seller={seller} date={date} />
    </Stack>
  </Stack>
);
