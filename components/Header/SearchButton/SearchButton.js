import { SearchIcon } from "@chakra-ui/icons";
import {
  IconButton,
  useColorMode,
  useDisclosure,
  WrapItem,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import { useHotkeys } from "react-hotkeys-hook";

export default function SearchButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleColorMode } = useColorMode();

  const initialRef = useRef();
  const finalRef = useRef();
  useHotkeys("alt+k", onOpen);

  return (
    <WrapItem>
      <IconButton
        aria-label="Search database"
        onClick={onOpen}
        icon={<SearchIcon />}
      />
      <SearchBar
        isOpen={isOpen}
        onClose={onClose}
        initialRef={initialRef}
        finalRef={finalRef}
      />
    </WrapItem>
  );
}
