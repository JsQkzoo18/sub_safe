import { AddIcon } from "@chakra-ui/icons";
import { Button, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import { colorModeSchema } from "../../../utils/colorMode";
import { ProductForm } from "./ProductForm";
import { CustomDrawer } from "./CustomDrawer";

export default function AddProduct({ setReloadProducts }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();

  return (
    <>
      <Button
        leftIcon={<AddIcon />}
        colorScheme={colorModeSchema()}
        onClick={onOpen}
      >
        Agregar Producto
      </Button>
      <CustomDrawer
        isOpen={isOpen}
        firstField={firstField}
        onClose={onClose}
        header="Agrega un producto"
      >
        <ProductForm
          firstField={firstField}
          onClose={onClose}
          setReloadProducts={setReloadProducts}
        />
      </CustomDrawer>
    </>
  );
}
