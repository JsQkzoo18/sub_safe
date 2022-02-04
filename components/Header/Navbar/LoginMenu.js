import {
  Text,
  Button,
  MenuButton,
  MenuList,
  Menu,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { colorModeSchema } from "../../../utils/colorMode";
import { DesktopSubNav } from "./DesktopSubNav";
import { SubMenu } from "./SubMenu";

export const LoginMenu = ({ user, logout }) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        colorScheme={colorModeSchema()}
        variant={"ghost"}
        _focus={{
          outline: "0",
        }}
        display={{ base: "none", md: "flex" }}
      >
        <Text>{user}</Text>
      </MenuButton>
      <MenuList>
        <MenuItem _hover={{ bg: "transparent" }}>
          <DesktopSubNav label={"Mis productos"} href={"/user/my-products"} />
        </MenuItem>

        <MenuItem _hover={{ bg: "transparent" }}>
          <DesktopSubNav label={"Mis compras"} href={"/user/my-shopping"} />
        </MenuItem>

        <MenuDivider color={colorModeSchema()} />

        <MenuItem display={{ base: "block", md: "none" }}>
          <Text>{user}</Text>
        </MenuItem>
        <MenuItem _hover={{ bg: "transparent" }}>
          <SubMenu label={"Cerrar Sesión"} logout={logout} />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
