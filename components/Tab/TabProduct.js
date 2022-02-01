import NextLink from "next/link";

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
  useColorMode,
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
  Flex,
} from "@chakra-ui/react";
import { HeaderWrapper } from "../Item/HeaderWrapper/HeaderWrapper";
import { DescriptionWrapper } from "../Item/DescriptionWrapper/DescriptionWrapper";
import { DetailsWrapper } from "../Item/DetailsWrapper/DetailsWrapper";
import { CheckIcon, ChevronLeftIcon, LockIcon } from "@chakra-ui/icons";
import { useAuth } from "../../hooks";
import { useGetComments } from "../../hooks/useComments";
import RequiredLogin from "../RequiredLogin/RequiredLogin";
import { map, size } from "lodash";
import { colorModeSchema } from "../../utils/colorMode";
import Loader from "../Loader";
import NumberField from "../Forms/NumberField/NumberField";

import { useRouter } from "next/router";
import AddComments from "../AddComments/AddComments";
import { useState } from "react";

export default function TabProduct({
  name,
  description,
  currentBid,
  category,
  seller,
  date,
  id,
}) {
  const router = useRouter();

  const [tabIndex, setTabIndex] = useState(0);

  const [reloadComments, setReloadComments] = useState(false);

  const handleTabsChange = (index) => {
    setTabIndex(index);
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
            currentBid={currentBid}
            category={category}
            seller={seller}
            date={date}
          />
        </TabPanel>
        <TabPanel>
          <Bids currentBid={currentBid} />
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

const Description = ({
  name,
  description,
  currentBid,
  category,
  seller,
  date,
  color,
}) => (
  <Stack
    spacing={{ base: 6, md: 10 }}
    overflowY="scroll"
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
        currentBid={currentBid}
        color={color}
      />
      <DescriptionWrapper description={description} />

      <DetailsWrapper seller={seller} date={date} />
    </Stack>
  </Stack>
);

const Bids = ({ currentBid }) => {
  const { auth } = useAuth();

  return (
    <Stack
      spacing={4}
      overflowY="scroll"
      maxHeight={{ base: "full", md: "full", lg: "510px" }}
      h={"505px"}
      px={5}
      py={7}
    >
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
          <StatNumber>{`$ ${currentBid}`}</StatNumber>
          <StatHelpText>Enero 21 - 2022</StatHelpText>
        </Stat>
      </StatGroup>

      <NumberField currentBid={currentBid} />

      {/* <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
        >
          $
        </InputLeftElement>
        <Input
          placeholder="Toma mi oferta!"
          isDisabled={!auth ?? true}
          colorScheme={colorModeSchema()}
          variant="filled"
        />
      </InputGroup> */}

      {auth ? (
        <Button
          rounded={"md"}
          w={"full"}
          mt={8}
          size={"lg"}
          py={"7"}
          // bg={useColorModeValue("gray.900", "gray.50")}
          // color={useColorModeValue("white", "gray.900")}
          colorScheme={useColorModeValue("green", "whatsapp")}
          textTransform={"uppercase"}
          _hover={{
            transform: "translateY(2px)",
            boxShadow: "lg",
          }}
        >
          Ofertar
        </Button>
      ) : (
        <RequiredLogin />
      )}
    </Stack>
  );
};

const Comments = ({ id, reloadComments, setReloadComments }) => {
  const { comments, loading } = useGetComments(
    id,
    reloadComments,
    setReloadComments
  );
  if (loading) return <Loader />;
  return (
    <>
      <AddComments id={id} setReloadComments={setReloadComments} />
      {size(comments) > 0 ? (
        <Stack
          spacing={{ base: 1, md: 2 }}
          overflowY="scroll"
          maxHeight={{ base: "full", md: "full", lg: "510px" }}
          h={"505px"}
          m={0}
          p={0}
        >
          <Stack
            spacing={{ base: 1, sm: 2 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            {map(comments, (x) => (
              <CardComment
                key={x.id}
                user={x.user[0]?.username}
                title={x.title}
                description={x.content}
              />
            ))}
          </Stack>
        </Stack>
      ) : (
        <Box display={"flex"} justifyContent={"center"}>
          <Text>No hay comentarios</Text>
        </Box>
      )}
    </>
  );
};

const CardComment = ({ user, title, description }) => (
  <Center>
    <Box
      maxW={"500px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      rounded={"md"}
      overflow={"hidden"}
      m={0}
      p={0}
    >
      <Stack>
        <Text
          color={useColorModeValue("primaryLight", "primaryDark")}
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
