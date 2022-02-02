import React, { useRef, useState } from "react";

import { EditIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Button,
  Collapse,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import { Formik, Field } from "formik";
import * as Yup from "yup";
import { addCommentAPI } from "../../api/comments";
import { useAuth } from "../../hooks";
import { colorModeSchema } from "../../utils/colorMode";
import {
  commentInitialValues,
  commentValidationSchema,
} from "../../utils/formValidation";
import toast from "react-hot-toast";
import TextField from "../Forms/TextField/TextField";

export default function AddComments({ id, setReloadComments }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);

  const { auth } = useAuth();

  const initialRef = useRef();

  if (!id) return null;

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
                  <TextField
                    type="text"
                    name="title"
                    label="Título"
                    placeholder="Título del comentario"
                    isRequired
                    initialRef={initialRef}
                  />

                  <FormControl
                    id="content"
                    mt={4}
                    isInvalid={
                      (formik.errors.content &&
                        formik.values.content?.length > 0) ||
                      (formik.errors.content && formik.touched)
                    }
                    isRequired
                  >
                    <FormLabel>Descripción</FormLabel>
                    <Field
                      as={Textarea}
                      placeholder="Escribe la descripción"
                      name="content"
                    />
                    <Collapse
                      in={
                        (formik.errors.content &&
                          formik.values.content?.length > 0) ||
                        (formik.errors.content && formik.touched)
                      }
                      animateOpacity
                    >
                      <FormErrorMessage>
                        <Alert
                          status="warning"
                          variant="subtle"
                          rounded={"md"}
                          fontWeight={"500"}
                        >
                          <AlertIcon />
                          <Text
                            color={useColorModeValue(
                              "yellow.600",
                              "yellow.400"
                            )}
                          >
                            {formik.errors.content}
                          </Text>
                        </Alert>
                      </FormErrorMessage>
                    </Collapse>
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button type="submit" colorScheme={colorModeSchema()} mr={3}>
                    Comentar
                  </Button>
                  <Button onClick={onClose}>Cancelar</Button>
                </ModalFooter>
              </ModalContent>
            </Stack>
          </Modal>
        </>
      )}
    </Formik>
  );
}
