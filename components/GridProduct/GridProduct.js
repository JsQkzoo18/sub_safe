import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import SimpleProduct from "../SimpleProduct/SimpleProduct";

export default function GridProduct() {
  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8} mt={20}>
        <SimpleProduct />
        <SimpleProduct />
        <SimpleProduct />
        <SimpleProduct />
        <SimpleProduct />
        <SimpleProduct />
        <SimpleProduct />
        <SimpleProduct />
        <SimpleProduct />
        <SimpleProduct />
        <SimpleProduct />
        <SimpleProduct />
        <SimpleProduct />
        <SimpleProduct />
      </SimpleGrid>
    </Box>
  );
}
