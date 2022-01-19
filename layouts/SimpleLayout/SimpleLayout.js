import React from "react";
import { Container } from "@chakra-ui/react";
import classNames from "classnames";
import Navbar from "../../components/Header/Navbar";

export default function SimpleLayout(props) {
  const { children, className } = props;
  return (
    <div className="simple-layout">
      <Navbar />
      <Container className="content" maxW="8xl" centerContent>
        {children}
      </Container>
    </div>
  );
}
