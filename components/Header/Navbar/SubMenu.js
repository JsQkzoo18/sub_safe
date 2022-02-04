import {
  Box,
  Flex,
  Text,
  Stack,
  Icon,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const SubMenu = ({ label, logout }) => {
  return (
    <Link
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      w={"full"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
      onClick={logout}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};
