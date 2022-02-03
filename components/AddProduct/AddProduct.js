import { AddIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Collapse,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
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
import FileInput from "../Forms/FileInput";
import { RemoveExtension } from "../../utils/removeExtension";
import { useAuth } from "../../hooks";
import { addProductAPI } from "../../api/products";
import toast from "react-hot-toast";
import Loader from "../Loader";
import { addBidAPI } from "../../api/bidding";

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

function ProductForm({ firstField, onClose, setReloadProducts }) {
  const { auth } = useAuth();

  let productData = new FormData();

  console.log(auth);

  if (!auth) return <Loader />;
  return (
    <Formik
      initialValues={productInitialValues()}
      validationSchema={Yup.object(productValidationSchema())}
      onSubmit={async (values, actions) => {
        const {
          name,
          description,
          starting_bid,
          main_image,
          image_1,
          image_2,
          image_3,
          image_4,
        } = values;

        productData.append("name", name);
        productData.append("description", description);
        productData.append("starting_bid", starting_bid);
        productData.append("current_bid", starting_bid);
        productData.append("category", 1);
        productData.append("main_image", main_image);
        productData.append(
          "main_image_opt_text",
          RemoveExtension(main_image.name)
        );

        image_1 && productData.append("image_1", image_1);
        productData.append("image_1_opt_text", RemoveExtension(image_1.name));

        image_2 && productData.append("image_2", image_2);
        productData.append("image_2_opt_text", RemoveExtension(image_2.name));

        image_3 && productData.append("image_3", image_3);
        productData.append("image_3_opt_text", RemoveExtension(image_3.name));

        image_4 && productData.append("image_4", image_4);
        productData.append("image_4_opt_text", RemoveExtension(image_4.name));

        productData.append("is_active", true);
        productData.append("seller", auth?.userData.id ?? 1);

        try {
          const response = await addProductAPI(auth?.token, productData);

          console.log("Respuesta creacion", response);
          // const respon2 = await addBidAPI(auth?.token, bidData);

          if (response) {
            setReloadProducts(true);
            toast.success("Se ha agregado el producto");
            actions.resetForm();
            onClose();
          }
        } catch (error) {
          toast.error(error.message);
        }
        //actions.resetForm();
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
              placeholder="Ingrese la oferta inicial"
              isRequired
            />

            <FileInput
              name="main_image"
              label="Imagen Principal"
              error={formik.errors.main_image}
              evaluation={formik.values?.main_image?.name}
              isRequired
              formik={formik}
            />

            <FileInput
              name="image_1"
              label="Imagen Alternativa 1"
              error={formik.errors.image_1}
              evaluation={formik.values?.image_1?.name}
              formik={formik}
            />
            <FileInput
              name="image_2"
              label="Imagen Alternativa 2"
              error={formik.errors.image_2}
              evaluation={formik.values?.image_2?.name}
              formik={formik}
            />

            <FileInput
              name="image_3"
              label="Imagen Alternativa 3"
              error={formik.errors.image_3}
              evaluation={formik.values?.image_3?.name}
              formik={formik}
            />

            <FileInput
              name="image_4"
              label="Imagen Alternativa 4"
              error={formik.errors.image_4}
              evaluation={formik.values?.image_4?.name}
              formik={formik}
            />
          </Stack>
        </>
      )}
    </Formik>
  );
}
