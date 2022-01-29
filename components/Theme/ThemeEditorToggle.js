import {
  SunIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  RepeatClockIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  useColorModeValue,
  IconButton,
  Flex,
  Heading,
  Center,
} from "@chakra-ui/react";
import {
  ThemeEditor,
  ThemeEditorButton,
  ThemeEditorColors,
  ThemeEditorDrawer,
  ThemeEditorDrawerFooter,
  useThemeEditor,
  ColorModeToggle,
} from "@hypertheme-editor/chakra-ui";
import React from "react";

export default function ThemeEditorToggle(props) {
  return (
    <ThemeEditor>
      <ThemeEditorButton
        size="sm"
        h="auto"
        variant="link"
        borderWidth={1}
        borderColor="transparent"
        _hover={{
          borderColor: useColorModeValue("primary.500", "gray.200"),
          transform: "translateY(-2px)",
        }}
        {...props}
      />
      <ThemeEditorDrawer
        hideUpgradeToPro
        hideCredits
        headerComponent={headerTheme()}
        footerComponent={<ThemeEditorDrawerFooter actionButton={""} />}
      >
        <ThemeEditorColors icon={SunIcon} title="Cambiar los colores" />
      </ThemeEditorDrawer>
    </ThemeEditor>
  );
}

function headerTheme() {
  return (
    <Flex direction={"column"}>
      <Box
        py={6}
        px={3}
        bgColor={useColorModeValue("purpleDark", "gray.200")}
        color="black"
      >
        <Center>
          <Heading as="h3" size="md" center>
            Configurar colores
          </Heading>
        </Center>
        <Center>
          <UndoRedoButtons />
        </Center>
      </Box>
    </Flex>
  );
}

function UndoRedoButtons() {
  const { canUndo, undo, canRedo, redo } = useThemeEditor();

  return (
    <ButtonGroup variant="outline" spacing="6" marginTop={2}>
      <IconButton
        aria-label="undo"
        icon={<ChevronLeftIcon />}
        disabled={!canUndo}
        onClick={undo}
        _hover={{
          borderColor: useColorModeValue("primary.500", "gray.200"),
          transform: "translateY(-2px)",
        }}
      />

      <IconButton
        aria-label="redo"
        icon={<ChevronRightIcon />}
        disabled={!canRedo}
        onClick={redo}
        _hover={{
          borderColor: useColorModeValue("primary.500", "gray.200"),
          transform: "translateY(-2px)",
        }}
      />
    </ButtonGroup>
  );
}
