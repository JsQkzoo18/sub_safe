import React from "react";
import { Container } from "@chakra-ui/react";
import Navbar from "../../components/Header/Navbar";

export default function SimpleLayout({ children }) {
  return (
    <div className="simple-layout">
      <Navbar />
      <Container
        maxW="full"
        minH={{ base: "100%", lg: "100vh" }}
        pt={{ base: 10, lg: 24 }}
        px={{ base: 5, lg: 24 }}
        overflowY={"scroll"}
      >
        {children}
      </Container>
    </div>
  );
}
