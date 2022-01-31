import React from "react";
import { Container } from "@chakra-ui/react";
import Navbar from "../../components/Header/Navbar";
import { useAuth } from "../../hooks";

export default function SimpleLayout({ children }) {
  const { auth, logout } = useAuth();
  return (
    <div className="simple-layout">
      <Navbar auth={auth} logout={logout} />
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
