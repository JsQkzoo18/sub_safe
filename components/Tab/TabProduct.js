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
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatGroup,
  Badge,
  Center,
  Text,
  Box,
  Heading,
} from "@chakra-ui/react";
import { HeaderWrapper } from "../Item/HeaderWrapper/HeaderWrapper";
import { DescriptionWrapper } from "../Item/DescriptionWrapper/DescriptionWrapper";
import { FeaturesWrapper } from "../Item/FeaturesWrapper/FeaturesWrapper";
import { DetailsWrapper } from "../Item/DetailsWrapper/DetailsWrapper";
import { MoreDetailsWrapper } from "../Item/MoreDetailsWrapper/MoreDetailsWrapper";
import { CheckIcon } from "@chakra-ui/icons";

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
          <Bids />
        </TabPanel>
        <TabPanel>
          <Comments />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

const Description = () => (
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
  </>
);

const Bids = () => (
  <Stack spacing={4}>
    <StatGroup h="100px" color="white" borderRadius={10}>
      <Stat p={2} color="black" bg="green.50">
        <StatLabel>
          <Badge colorScheme="green">Oferta inicial</Badge>
        </StatLabel>
        <StatNumber>$126.00</StatNumber>
        <StatHelpText>Enero 12 - 2022</StatHelpText>
      </Stat>
      <Stat p={2} ml={1} color="black" bg="orange.100">
        <StatLabel>
          <Badge colorScheme="pink">Oferta actual</Badge>
        </StatLabel>
        <StatNumber>$627.00</StatNumber>
        <StatHelpText>Enero 21 - 2022</StatHelpText>
      </Stat>
    </StatGroup>

    <InputGroup>
      <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
        $
      </InputLeftElement>
      <Input placeholder="Toma mi oferta!" />
      <InputRightElement>
        <CheckIcon color="green.500" />
      </InputRightElement>
    </InputGroup>

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
      Ofertar
    </Button>
  </Stack>
);

const Comments = () => (
  <Stack spacing={{ base: 2, md: 4 }}>
    <Stack
      spacing={{ base: 1, sm: 2 }}
      direction={"column"}
      divider={
        <StackDivider borderColor={useColorModeValue("gray.200", "gray.600")} />
      }
    >
      <CardComment
        user={"Alex Cuenca"}
        title="Me encanta"
        description="Tiernosito es muy sabio, es un osito con espíritu de abuelito cuyo
          corazón está siempre en su lugar. Ya sea al dar un consejo o al
          ofrecer comprensión, siempre sabe lo que necesita un niño para
          ayudarle a expresar sus sentimientos."
      />
      <CardComment
        user="Francisco LLinin"
        title="Quiero un osito!"
        description="Son tan lindos, y su textura es unica"
      />
    </Stack>
  </Stack>
);

const CardComment = ({ user, title, description }) => (
  <Center py={5}>
    <Box
      maxW={"500px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"md"}
      p={6}
      overflow={"hidden"}
    >
      <Stack>
        <Text
          color={"green.500"}
          textTransform={"uppercase"}
          fontWeight={800}
          fontSize={"sm"}
          letterSpacing={1.1}
        >
          {user}
        </Text>
        <Heading
          color={useColorModeValue("gray.700", "white")}
          fontSize={"2xl"}
          fontFamily={"body"}
        >
          {title}
        </Heading>
        <Text color={"gray.500"}>{description}</Text>
      </Stack>
    </Box>
  </Center>
);
