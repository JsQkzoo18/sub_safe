import React from "react";
import { Container } from "@chakra-ui/react";
import TopBar from "../../components/Header/TopBar";
import { useAuth } from "../../hooks";
import { useRouter } from "next/router";

export default function AuthLayout({ children }) {
  const { auth } = useAuth();
  const router = useRouter();
  if (auth) router.push("/");
  return (
    <>
      {!auth && (
        <div className="simple-layout">
          <TopBar />
          <Container maxW="full" m={0} p={0} h={{ base: "100%", lg: "80vh" }}>
            {children}
          </Container>
        </div>
      )}
    </>
  );
}
