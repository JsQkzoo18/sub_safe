import React from "react";
import { Container } from "@chakra-ui/react";
import Navbar from "../../components/Header/Navbar";
import { HyperThemeEditor } from "@hypertheme-editor/chakra-ui";
import ThemeEditorToggle from "../../components/Theme/ThemeEditorToggle";

export default function SimpleLayout({ children }) {
  return (
    <div className="simple-layout">
      <Navbar />
      <Container className="content" maxW="8xl" centerContent>
        {children}
        <ThemeEditorToggle />
      </Container>
    </div>
  );
}
