import { Stack } from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  productEditInitialValues,
  productEditValidationSchema,
} from "../../../utils/formValidation";
import TextField from "../../Forms/TextField/TextField";
import TextAreaField from "../../Forms/TextAreaField/TextAreaField";
import FileInput from "../../Forms/FileInput";
import { useAuth } from "../../../hooks";
import { addProductAPI, editProductAPI } from "../../../api/products";
import toast from "react-hot-toast";
import Loader from "../../Loader";
import NumberField from "../../Forms/NumberField/NumberField";
import { RemoveExtension } from "../../../utils/removeExtension";

export function EditProductForm({
  firstField,
  onClose,
  setReloadProducts,
  name,
  id,
  description,
  main_image,
  image_1,
  image_2,
  image_3,
  image_4,
  currentBid,
  startingBid,
}) {
  const { auth } = useAuth();

  let productData = new FormData();

  if (!auth) return <Loader />;
  return (
    <Formik
      initialValues={productEditInitialValues(
        name,
        description,
        main_image,
        image_1,
        image_2,
        image_3,
        image_4,
        startingBid,
        currentBid
      )}
      validationSchema={Yup.object(productEditValidationSchema())}
      onSubmit={async (values, actions) => {
        const {
          name,
          description,
          current_bid,
          main_image,
          image_1,
          image_2,
          image_3,
          image_4,
        } = values;

        productData.append("name", name);
        productData.append("description", description);
        productData.append("starting_bid", current_bid);
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

        productData.append("seller", auth?.userData.id ?? 1);
        console.log("dataaaa", JSON.stringify(productData));

        try {
          const response = await editProductAPI(auth?.token, productData, id);

          // const respon2 = await addBidAPI(auth?.token, bidData);
          if (response) {
            console.log("editado", id);
            setReloadProducts(true);
            toast.success("Se ha editado el producto");
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
            id="edit-form-product"
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
              name="starting_actual"
              label="Oferta actual"
              isRequired
              formik={formik}
              value={formik.values.current_bid}
              isReadOnly
              currentBid={formik.values.current_bid}
              helper="No se puede modficar la oferta"
            />

            <FileInput
              name="main_image"
              label="Imagen Principal"
              error={formik.errors.main_image}
              evaluation={formik.values?.main_image?.name}
              formik={formik}
              img={formik.values.main_image}
            />

            <FileInput
              name="image_1"
              label="Imagen Alternativa 1"
              error={formik.errors.image_1}
              evaluation={formik.values?.image_1?.name}
              formik={formik}
              img={formik.values.image_1}
            />
            <FileInput
              name="image_2"
              label="Imagen Alternativa 2"
              error={formik.errors.image_2}
              evaluation={formik.values?.image_2?.name}
              formik={formik}
              img={formik.values.image_2}
            />

            <FileInput
              name="image_3"
              label="Imagen Alternativa 3"
              error={formik.errors.image_3}
              evaluation={formik.values?.image_3?.name}
              formik={formik}
              img={formik.values.image_3}
            />

            <FileInput
              name="image_4"
              label="Imagen Alternativa 4"
              error={formik.errors.image_4}
              evaluation={formik.values?.image_4?.name}
              formik={formik}
              img={formik.values.image_4}
            />
          </Stack>
        </>
      )}
    </Formik>
  );
}
