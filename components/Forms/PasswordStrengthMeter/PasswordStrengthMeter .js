import { Progress, Badge, Text, Divider, Stack, Flex } from "@chakra-ui/react";
import zxcvbn from "zxcvbn";

export default function PasswordStrengthMeter({ password = "password" }) {
  const testResult = zxcvbn(password);
  const num = (testResult.score * 100) / 4;

  const createPassLabel = () => {
    switch (testResult.score) {
      case 0:
        return "Muy débil";
      case 1:
        return "Débil";
      case 2:
        return "Normal";
      case 3:
        return "Fuerte";
      case 4:
        return "Excelente";
      default:
        return "";
    }
  };

  const funcProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return "red";
      case 1:
        return "yellow";
      case 2:
        return "orange";
      case 3:
        return "teal";
      case 4:
        return "green";
      default:
        return "none";
    }
  };

  return (
    <>
      <Flex align="center" justify="space-between">
        <Text>Nivel de seguridad: </Text>
        <Badge colorScheme={funcProgressColor()}>
          <Text textAlign={"center"}>{createPassLabel()}</Text>
        </Badge>
      </Flex>
      <Progress
        colorScheme={funcProgressColor()}
        size="sm"
        value={num}
        isAnimated
        hasStripe
        rounded="md"
      />
      <Divider />
    </>
  );
}
