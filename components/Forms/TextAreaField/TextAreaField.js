import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Textarea } from "@chakra-ui/textarea";
import {
  Alert,
  AlertIcon,
  Collapse,
  InputGroup,
  Text,
  FormHelperText,
  useColorModeValue,
} from "@chakra-ui/react";
import { Field, useField } from "formik";

const TextAreaField = ({
  label,
  helper = "",
  ispass = false,
  isRequired,
  isReadOnly,
  isDisabled,
  initialRef,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <FormControl
      isInvalid={
        (meta.error && meta.value?.length > 0) || (meta.error && meta.touched)
      }
      isRequired={isRequired}
    >
      <FormLabel ref={initialRef}>{label}</FormLabel>
      <Field
        as={Textarea}
        isReadOnly={isReadOnly}
        isDisabled={isDisabled}
        {...field}
        {...props}
      />
      {helper.length > 0 && (
        <FormHelperText
          color={useColorModeValue("primaryLight", "primaryDark")}
          pl={1}
        >
          {helper} *
        </FormHelperText>
      )}
      <Collapse
        in={
          (meta.error && meta.value?.length > 0) || (meta.error && meta.touched)
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
            <Text color={useColorModeValue("yellow.600", "yellow.400")}>
              {meta.error}
            </Text>
          </Alert>
        </FormErrorMessage>
      </Collapse>
    </FormControl>
  );
};

export default TextAreaField;
