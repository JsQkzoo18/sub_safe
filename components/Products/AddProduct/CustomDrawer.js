import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { SubmitButton } from "./SubmitButton";

export function CustomDrawer({
  isOpen,
  firstField,
  onClose,
  header = "",
  size = "md",
  children,
}) {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      initialFocusRef={firstField}
      onClose={onClose}
      size={size}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">{header}</DrawerHeader>

        <DrawerBody>{children}</DrawerBody>

        <DrawerFooter borderTopWidth="1px">
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <SubmitButton />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
