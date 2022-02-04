import { useState } from "react";
import { useRouter } from "next/router";

import {
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Button,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

import { colorModeSchema } from "../../utils/colorMode";

import { getTIndex, setTIndex } from "../../utils/tabIndex";
import { dateParser } from "../../utils/dateParser";
import { Comments } from "./Comments";
import { Bids } from "./Bids";
import { Description } from "./Description";

export default function TabProduct({
  name,
  description,
  currentBid,
  startedBid,
  category,
  seller,
  date,
  id,
  setReloadProduct,
  created,
  modified,
}) {
  const router = useRouter();

  const [tabIndex, setTabIndex] = useState(parseInt(getTIndex()));
  const [reloadComments, setReloadComments] = useState(false);

  /**
   * It changes the tab index and the tIndex.
   */
  const handleTabsChange = (index) => {
    setTabIndex(index);
    setTIndex(index);
  };

  return (
    <Tabs
      variant={"solid-rounded"}
      colorScheme="green"
      isFitted
      index={tabIndex}
      onChange={handleTabsChange}
    >
      <Flex justify={"flex-start"} mt={-8}>
        <Button
          variant="ghost"
          colorScheme={colorModeSchema()}
          leftIcon={<ChevronLeftIcon />}
          _focus={{
            outline: "none",
          }}
          onClick={router.back}
        >
          Regresar
        </Button>
      </Flex>
      <TabList
        bg={useColorModeValue("white", "gray.900")}
        rounded={"full"}
        mt={2}
      >
        <Tab _selected={{ color: "white", bg: "purpleDark" }}>Información</Tab>
        <Tab>Ofertar</Tab>
        <Tab _selected={{ color: "white", bg: "blue.500" }}>Comentarios</Tab>
      </TabList>

      <TabPanels
        bg={useColorModeValue("white", "gray.900")}
        rounded={"md"}
        mt={5}
      >
        <TabPanel>
          <Description
            name={name}
            description={description}
            startingBid={startedBid}
            currentBid={currentBid}
            category={category}
            seller={seller}
            date={created && dateParser(created).parserDate}
          />
        </TabPanel>
        <TabPanel>
          <Bids
            currentBid={currentBid}
            startedBid={startedBid}
            id={id}
            createdDate={created && dateParser(created).parserDate}
            createdTime={created && dateParser(created).time}
            modifiedDate={modified && dateParser(modified).parserDate}
            modifiedTime={modified && dateParser(modified).time}
            setReloadProduct={setReloadProduct}
          />
        </TabPanel>
        <TabPanel>
          <Comments
            id={id}
            reloadComments={reloadComments}
            setReloadComments={setReloadComments}
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
