import { Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

export default function Category() {
  const { query } = useRouter();

  return (
    <div>
      <Heading>Desde categoria {query.id}</Heading>
    </div>
  );
}
