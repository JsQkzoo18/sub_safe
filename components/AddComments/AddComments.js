import React, { useState } from "react";

import { EditIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { Formik, Field, useField } from "formik";
import * as Yup from "yup";
import { addCommentAPI } from "../../api/comments";
import { useAuth } from "../../hooks";
import { colorModeSchema } from "../../utils/colorMode";
import {
  commentInitialValues,
  commentValidationSchema,
} from "../../utils/formValidation";
import toast from "react-hot-toast";

export default function AddComments({ id, setReloadComments }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);

  const { auth } = useAuth();

  const initialRef = React.useRef();

  return (
    <Formik
      initialValues={commentInitialValues()}
      validationSchema={Yup.object(commentValidationSchema())}
      onSubmit={async (values, actions) => {
        setLoading(true);
        const { title, content } = values;
        const dataForm = {
          title,
          content,
          article: id,
        };

        try {
          const response = await addCommentAPI(auth?.token, dataForm);

          if (response) {
            setReloadComments(true);
            toast.success("Se ha agregado el comentario");
            actions.resetForm();
            onClose();
          }
        } catch (error) {
          toast.error(error.message);
        }
        setLoading(false);
        // actions.resetForm();
      }}
    >
      {(formik) => (
        <>
          <Flex justifyContent={"flex-end"}>
            <IconButton
              colorScheme={colorModeSchema()}
              aria-label="Add comment"
              icon={<EditIcon />}
              onClick={onOpen}
              position={"absolute"}
              ml={-1}
            />
          </Flex>
          <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <Stack as="form" onSubmit={formik.handleSubmit}>
              <ModalContent>
                <ModalHeader>Escribir un comentario</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl id="title">
                    <FormLabel ref={initialRef}>Título</FormLabel>
                    <Field
                      as={Input}
                      placeholder="Título del comentario"
                      type="text"
                      name="title"
                    />
                  </FormControl>

                  <FormControl id="content" mt={4}>
                    <FormLabel>Descripción</FormLabel>
                    <Field
                      as={Textarea}
                      placeholder="Escribe la descripción"
                      name="content"
                    />
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button type="submit" colorScheme={colorModeSchema()} mr={3}>
                    Save
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Stack>
          </Modal>
        </>
      )}
    </Formik>
  );
}
