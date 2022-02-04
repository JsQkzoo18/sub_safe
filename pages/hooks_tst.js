import {
  Center,
  Code,
  Container,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useGetCategories } from "../hooks/useCategories";
import { useGetProductByUser, useGetProducts } from "../hooks/useProduct";
import { useAuth } from "../hooks";
import { map, size } from "lodash";
import { getProductImages } from "../utils/extractImages";
import FileInput from "../components/Forms/FileInput";
import AddProduct from "../components/Products/AddProduct/AddProduct";

export default function hooks_tst() {
  return (
    <>
      <AddProduct />
    </>
  );
}
