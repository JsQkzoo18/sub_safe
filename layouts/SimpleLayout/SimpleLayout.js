import React from "react";
import { Container } from "@chakra-ui/react";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer";

export default function SimpleLayout({ children }) {
  return (
    <div className="simple-layout">
      <Navbar />
      <Container className="content" maxW="8xl" centerContent>
        {children}
      </Container>
    </div>
  );
}
