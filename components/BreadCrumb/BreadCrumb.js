import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function BreadCrumb({ secondLevel = "Usuario", page = "" }) {
  return (
    <Breadcrumb
      spacing="8px"
      separator={<ChevronRightIcon color="gray.500" />}
      color={useColorModeValue("primaryLight", "primaryDark")}
      p={4}
      mb={5}
      rounded={"md"}
      shadow={"md"}
      bg={useColorModeValue("white", "black_s")}
    >
      <BreadcrumbItem>
        <NextLink href="/" passHref>
          <BreadcrumbLink>Inicio</BreadcrumbLink>
        </NextLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Text> {secondLevel} </Text>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <NextLink href="/" passHref>
          <BreadcrumbLink fontWeight={"bold"}>{page}</BreadcrumbLink>
        </NextLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
