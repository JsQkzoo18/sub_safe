import {
  Box,
  Center,
  useColorModeValue,
  Text,
  Stack,
  Image,
  Tag,
  Flex,
  Divider,
  IconButton,
  Wrap,
  Button,
  Tooltip,
  AspectRatio,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { formatPrice } from "../../../utils/formatPrice";
import { colorModeSchema } from "../../../utils/colorMode";
import { useRouter } from "next/router";
import { CgToggleOn, CgToggleOff } from "react-icons/cg";
import { MdDelete, MdEdit } from "react-icons/md";
import { useState } from "react";
import { addAuctionAPI } from "../../../api/auctions";
import { useAuth } from "../../../hooks";
import { current_time } from "../../../utils/currentTime";
import CustomAlertDialog from "../../CustomAlertDialog";
import { deleteProductApi, editProductAPI } from "../../../api/products";
import toast from "react-hot-toast";
import EditProduct from "../EditProduct/EditProduct";
import { getProductImages } from "../../../utils/extractImages";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

export default function SimpleProduct({
  name,
  startingBid,
  currentBid,
  id = "oso1",
  description = "",
  date,
  category,
  mainImage,
  isActive = false,
  isSold = false,
  setReloadProducts,
  product,
}) {
  const router = useRouter();
  const { auth } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [images, setImages] = useState(getProductImages(product));

  const data = {
    current_time,
    article: `${id}`,
    payment: null,
  };

  const activeAuction = async (token, data) => {
    const response = await addAuctionAPI(token, data);
    if (response) {
      setReloadProducts(true);
      console.log(response);
      toast.success(response.messages);
    }
  };

  const dlProduct = async (id, token) => {
    const response = await deleteProductApi(id, token);

    if (response) {
      toast.success(`Se elimino: ${name}`);
      setReloadProducts(true);
    } else toast.error("No se elimino el producto");
  };

  const edProduct = async (id, token, data) => {
    const response = await editProductAPI(token, data, id);
    if (response) {
      toast.success(`Se editp: ${id}`);
    } else toast.error("No se elimino el producto");
  };

  return (
    <Center>
      <Box>
        <Link href={`/products/${id}`}>
          <MotionBox
            role={"group"}
            p={3}
            mt={2}
            mb={2}
            maxW={"320px"}
            w={"full"}
            bg={useColorModeValue("white", "black_s")}
            boxShadow={"xl"}
            rounded={"lg"}
            cursor={"pointer"}
            whileHover={{
              scale: 1.025,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Box
              rounded={"lg"}
              pos={"relative"}
              height={"230px"}
              w={"full"}
              _groupHover={{
                _after: {
                  filter: "blur(10px)",
                },
              }}
            >
              <MotionImage
                rounded={"lg"}
                height={230}
                width={"full"}
                objectFit={"cover"}
                src={mainImage}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                position={"relative"}
              />

              <Flex justify={"space-between"} alignItems={"center"} mt={3}>
                <Tag colorScheme={colorModeSchema()}>{category}</Tag>
                {router.pathname === "/user/my-products" && (
                  <Tag colorScheme={isSold ? "pink" : "green"}>
                    {isSold ? "Vendido" : "Disponible"}
                  </Tag>
                )}
              </Flex>
            </Box>
            <Stack pt={10} align={"left"} mt={2}>
              <Text
                color={useColorModeValue("gray.700", "gray.300")}
                fontSize={"md"}
                fontWeight={"600"}
                textTransform={"uppercase"}
              >
                {name}
              </Text>
              <Text
                color={useColorModeValue("gray.700", "gray.200")}
                fontSize={"xl"}
                fontWeight={"800"}
                textTransform={"uppercase"}
              >
                {formatPrice(currentBid ?? startingBid)}
              </Text>
              <Text
                fontSize={"sm"}
                fontWeight={500}
                color={useColorModeValue("gray.500", "gray.400")}
                isTruncated
                maxW={"260px"}
              >
                {description}
              </Text>
              <Divider />
              <Text
                fontSize={"sm"}
                fontWeight={400}
                color={useColorModeValue("gray.600", "gray.500")}
                isTruncated
                maxW={"260px"}
              >
                {date}
              </Text>
            </Stack>
          </MotionBox>
        </Link>
        {router.pathname === "/user/my-products" && (
          <Flex justify="flex-start" align="center" mt={4}>
            <Tooltip
              hasArrow
              label={isActive ? "Desactivar Subasta" : "Activar Subastasna"}
              bg={isActive ? "green.600" : "red.600"}
              color={"white"}
              placement="bottom"
              rounded={"md"}
            >
              <IconButton
                variant={"solid"}
                onClick={() => activeAuction(auth?.token, data)}
                colorScheme={isActive ? "green" : "orange"}
                isDisabled={isSold ?? true}
                icon={
                  !isActive ? (
                    <CgToggleOff color="white" />
                  ) : (
                    <CgToggleOn color="white" />
                  )
                }
              />
            </Tooltip>

            <Tooltip
              hasArrow
              rounded={"md"}
              label={"Eliminar producto"}
              bg={"red.600"}
              color={"white"}
              placement="bottom"
            >
              <IconButton
                variant={"solid"}
                ml={2}
                onClick={onOpen}
                colorScheme={"red"}
                icon={<MdDelete color="white" />}
                isDisabled={isSold ?? true}
              />
            </Tooltip>

            <CustomAlertDialog
              isOpen={isOpen}
              onClose={onClose}
              onClickAction={() => dlProduct(id, auth?.token)}
              header={`Eliminar ${name}`}
              body="Esta acción no se puede deshacer. ¿Estás seguro?"
            />
          </Flex>
        )}
      </Box>
    </Center>
  );
}
