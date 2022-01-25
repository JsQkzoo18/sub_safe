import { AnimatePresence, motion } from "framer-motion";
import {
  IconButton,
  useColorMode,
  useColorModeValue,
  Wrap,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, AddIcon, SettingsIcon } from "@chakra-ui/icons";
import ThemeEditorToggle from "./ThemeEditorToggle";

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();

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
          colorScheme={useColorModeValue("purple", "orange")}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        />
        <Wrap display={{ base: "none", md: "none", lg: "inline-flex" }}>
          <ThemeEditorToggle />
        </Wrap>
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
