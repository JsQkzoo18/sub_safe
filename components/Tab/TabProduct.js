import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Stack,
  Button,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import { HeaderWrapper } from "../Item/HeaderWrapper/HeaderWrapper";
import { DescriptionWrapper } from "../Item/DescriptionWrapper/DescriptionWrapper";
import { FeaturesWrapper } from "../Item/FeaturesWrapper/FeaturesWrapper";
import { DetailsWrapper } from "../Item/DetailsWrapper/DetailsWrapper";
import { MoreDetailsWrapper } from "../Item/MoreDetailsWrapper/MoreDetailsWrapper";

export default function TabProduct() {
  return (
    <Tabs>
      <TabList>
        <Tab>Información</Tab>
        <Tab>Ofertar</Tab>
        <Tab>Comentarios</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Description />
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

function Description() {
  return (
    <>
      <Stack spacing={{ base: 6, md: 10 }}>
        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={"column"}
          divider={
            <StackDivider
              borderColor={useColorModeValue("gray.200", "gray.600")}
            />
          }
        >
          <HeaderWrapper />
          <DescriptionWrapper />
          <FeaturesWrapper />
          <DetailsWrapper />
        </Stack>
      </Stack>
      <MoreDetailsWrapper />

      <Button
        rounded={"none"}
        w={"full"}
        mt={8}
        size={"lg"}
        py={"7"}
        bg={useColorModeValue("gray.900", "gray.50")}
        color={useColorModeValue("white", "gray.900")}
        textTransform={"uppercase"}
        _hover={{
          transform: "translateY(2px)",
          boxShadow: "lg",
        }}
      >
        Buy
      </Button>
    </>
  );
}
