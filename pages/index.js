import { useEffect, useState } from "react";
import { getAllProducts } from "../api/products";
import GridProduct from "../components/GridProduct/GridProduct";
import SimpleLayout from "../layouts/SimpleLayout/SimpleLayout";
import { size } from "lodash";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <SimpleLayout>
      <GridProduct />
    </SimpleLayout>
  );
}
