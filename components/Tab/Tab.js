import React from "react";
import {
  Container,
  Stack,
  Button,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

import { DescriptionWrapper } from "../Item/DescriptionWrapper/DescriptionWrapper";
import { DetailsWrapper } from "../Item/DetailsWrapper/DetailsWrapper";
import { FeaturesWrapper } from "../Item/FeaturesWrapper/FeaturesWrapper";
import { HeaderWrapper } from "../Item/HeaderWrapper/HeaderWrapper";
import { MoreDetailsWrapper } from "../Item/MoreDetailsWrapper/MoreDetailsWrapper";

export default function Tab() {
  return (
    <Tabs>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>Hola</p>
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
