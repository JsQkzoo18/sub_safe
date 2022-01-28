import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export default function SearchBar({ initialRef, finalRef, isOpen, onClose }) {
  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior={"inside"}
      size={"xl"}
    >
      <ModalOverlay />
      <ModalContent rounded={"md"}>
        <ModalBody>
          <FormControl>
            <InputGroup size="md" alignItems={"center"}>
              <Input
                ref={initialRef}
                placeholder="Buscar Articulos"
                _focus={{ border: "none", outline: "unset" }}
              />

              <InputRightElement width="4.5rem">
                <Button
                  size="lg"
                  m={0}
                  p={0}
                  bg={"transparent"}
                  color={useColorModeValue("purpleDark", "white")}
                >
                  <SearchIcon />
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
