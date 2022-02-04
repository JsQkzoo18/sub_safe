import { SearchIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Tooltip,
  useColorMode,
  useDisclosure,
  WrapItem,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import { useHotkeys } from "react-hotkeys-hook";

export default function SearchButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();
  const finalRef = useRef();
  useHotkeys("alt+k", onOpen);

  return (
    <WrapItem>
      <Tooltip
        label={"Busca un producto"}
        placement="left"
        rounded={"md"}
        p={2}
        hasArrow
      >
        <IconButton
          aria-label="Search database"
          onClick={onOpen}
          icon={<SearchIcon />}
        />
      </Tooltip>

      <SearchBar
        isOpen={isOpen}
        onClose={onClose}
        initialRef={initialRef}
        finalRef={finalRef}
      />
    </WrapItem>
  );
}
