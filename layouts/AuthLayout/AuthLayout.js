import React from "react";
import { Container } from "@chakra-ui/react";
import TopBar from "../../components/Header/TopBar";

export default function AuthLayout({ children }) {
  return (
    <div className="simple-layout">
      <TopBar />
      <Container maxW="full" m={0} p={0} h={{ base: "100%", lg: "80vh" }}>
        {children}
      </Container>
    </div>
  );
}
