import { AnimatePresence, motion } from "framer-motion";
import {
  IconButton,
  useColorMode,
  useColorModeValue,
  Wrap,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import ThemeEditorToggle from "./ThemeEditorToggle";
import { useHotkeys } from "react-hotkeys-hook";
import { useEffect } from "react";
import { colorModeSchema } from "../../utils/colorMode";

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();

  useHotkeys("alt+n", toggleColorMode);

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: "flex", alignItems: "center" }}
        key={useColorModeValue("light", "dark")}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          colorScheme={colorModeSchema()}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        />
        {/* <Wrap display={{ base: "none", md: "none", lg: "inline-flex" }}>
          <ThemeEditorToggle />
        </Wrap> */}
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
