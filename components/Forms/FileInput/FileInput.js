import {
  Alert,
  AlertIcon,
  Collapse,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Box,
  useColorModeValue,
  Img,
  Flex,
} from "@chakra-ui/react";
import { size } from "lodash";
import { useEffect, useState } from "react";
import { onImageEdit, urlImageToFile } from "../../../utils/imagetoFile";

export default function FileInput({
  name,
  error,
  label = "Imagen",
  isRequired,
  formik,
  evaluation,
  isDisabled,
  isReadOnly,
  img,
}) {
  const [image, setImage] = useState(img ?? null);

  return (
    <FormControl
      isRequired={isRequired}
      isInvalid={error}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
    >
      <FormLabel>{label}</FormLabel>

      <Box
        rounded={"md"}
        border={"2px"}
        borderColor={useColorModeValue("gray.300", "primaryDark")}
        borderStyle={"dashed"}
        position={"relative"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        cursor={"pointer"}
        h={"70px"}
      >
        <Input
          type="file"
          accept="image/png,image/jpeg"
          id={name}
          name={name}
          onChange={(event) => {
            formik.setFieldValue(`${name}`, event.target.files[0]);

            event.target.files[0] === undefined && setImage(null);

            event.target.files[0] &&
              setImage(URL.createObjectURL(event.target.files[0]));
          }}
          opacity={0}
          pos={"absolute"}
          top={0}
          left={0}
          w={"full"}
          h={"100%"}
        />

        <Flex justifyContent={"space-between"} align="center" w="full" px={5}>
          {!evaluation && <Text>{!evaluation && `Selecciona una imagen`}</Text>}

          <Text isTruncated>{evaluation ?? ""}</Text>
          {image && (
            <Img
              src={image}
              alt={name}
              shadow={"sm"}
              borderRadius="md"
              p={1}
              my={5}
              h={70}
              w={70}
            />
          )}
        </Flex>
      </Box>

      <Collapse in={error} animateOpacity>
        <FormErrorMessage>
          <Alert
            status="warning"
            variant="subtle"
            rounded={"md"}
            fontWeight={"500"}
          >
            <AlertIcon />
            <Text color={useColorModeValue("yellow.600", "yellow.400")}>
              {error}
            </Text>
          </Alert>
        </FormErrorMessage>
      </Collapse>
    </FormControl>
  );
}
