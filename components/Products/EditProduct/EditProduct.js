import { AddIcon } from "@chakra-ui/icons";
import { Button, IconButton, Tooltip, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import { colorModeSchema } from "../../../utils/colorMode";
import { CustomDrawer } from "../AddProduct/CustomDrawer";
import { EditProductForm, ProductForm } from "./EditProductForm";
import { MdEdit } from "react-icons/md";

export default function EditProduct({
  setReloadProducts,
  id,
  name,
  description,
  currentBid,
  startingBid,
  main_image,
  image_1,
  image_2,
  image_3,
  image_4,
  isOpen,
  onClose,
  onOpen,
}) {
  const firstField = useRef();

  console.log(id);

  return (
    <>
      {/* <Button
        leftIcon={<AddIcon />}
        colorScheme={colorModeSchema()}
        onClick={onOpen}
      >
        Agregar Producto
      </Button> */}
      <Tooltip
        hasArrow
        rounded={"md"}
        label={"Eliminar producto"}
        bg={"red.600"}
        color={"white"}
        placement="bottom"
      >
        <IconButton
          variant={"solid"}
          ml={2}
          onClick={onOpen}
          colorScheme={"blue"}
          icon={<MdEdit color="white" />}
        />
      </Tooltip>
      <CustomDrawer
        isOpen={isOpen}
        firstField={firstField}
        onClose={onClose}
        header="Editar informacion del producto"
        form="edit-form-product"
      >
        <EditProductForm
          firstField={firstField}
          onClose={onClose}
          setReloadProducts={setReloadProducts}
          id={id}
          name={name}
          description={description}
          currentBid={currentBid}
          startingBid={startingBid}
          main_image={main_image}
          image_1={image_1}
          image_2={image_2}
          image_3={image_3}
          image_4={image_4}
        />
      </CustomDrawer>
    </>
  );
}
