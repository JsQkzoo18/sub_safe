import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Stack,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRef } from "react";
import { colorModeSchema } from "../../utils/colorMode";
import {
  productInitialValues,
  productValidationSchema,
} from "../../utils/formValidation";
import TextField from "../Forms/TextField/TextField";
import TextAreaField from "../Forms/TextAreaField/TextAreaField";
import NumberField from "../Forms/NumberField/NumberField";

export default function AddProduct() {
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
        <ProductForm firstField={firstField} />
      </CustomDrawer>
    </>
  );
}

function CustomDrawer({
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

function SubmitButton() {
  return (
    <Button type="submit" form="my-form" colorScheme={colorModeSchema()}>
      Agregar
    </Button>
  );
}

function ProductForm({ firstField }) {
  return (
    <Formik
      initialValues={productInitialValues()}
      validationSchema={Yup.object(productValidationSchema())}
      onSubmit={async (values, actions) => {
        const { name, description, starting_bid } = values;
        const dataForm = {
          name,
          description,
          starting_bid,
        };

        console.log(dataForm);

        // try {
        //   const response = await addCommentAPI(auth?.token, dataForm);

        //   if (response) {
        //     setReloadComments(true);
        //     toast.success("Se ha agregado el comentario");
        //     actions.resetForm();
        //     onClose();
        //   }
        // } catch (error) {
        //   toast.error(error.message);
        // }
        // setLoading(false);
        // actions.resetForm();
      }}
    >
      {(formik) => (
        <>
          <Stack
            as="form"
            id="my-form"
            onSubmit={formik.handleSubmit}
            spacing="24px"
          >
            <TextField
              type="text"
              name="name"
              label="Nombre"
              placeholder="Nombre del producto"
              isRequired
              initialRef={firstField}
            />

            <TextAreaField
              name="description"
              label="Descripcion"
              placeholder="Descripcion del producto"
              isRequired
            />

            <NumberField
              name="starting_bid"
              label="Oferta inicial"
              laber="Ingrese la oferta inicial"
              isRequired
            />
          </Stack>
        </>
      )}
    </Formik>
  );
}
